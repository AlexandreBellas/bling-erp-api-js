import Bling from 'bling-erp-api'
import express, { Request, Response } from 'express'
import fs from 'fs'

const tmpFile = './access.json'
const app = express()
app.use(express.urlencoded({ extended: true }))

app.post('/', (req: Request, res: Response) => {
  const { client_id: clientId, client_secret: clientSecret } = req.body
  const baseUrl = 'https://www.bling.com.br'
  const endpoint = 'Api/v3/oauth/authorize'
  const state = '1234567890'
  const redirectUri = 'http://localhost:3000/auth'

  fs.writeFileSync(tmpFile, JSON.stringify({ clientId, clientSecret }))

  res.redirect(
    `${baseUrl}/${endpoint}?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}`
  )
})

app.get('/auth', (req: Request, res: Response) => {
  const { code } = req.query

  const { clientId, clientSecret } = JSON.parse(
    fs.readFileSync(tmpFile).toString()
  )
  fs.rmSync(tmpFile)

  const authKey = `${clientId}:${clientSecret}`

  fetch('https://www.bling.com.br/Api/v3/oauth/token', {
    method: 'POST',
    body: `grant_type=authorization_code&code=${code}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(authKey)}`
    }
  }).then((response) => {
    response.json().then((content) => {
      const bling = new Bling(content.access_token)
      bling.produtos.get().then((products) => {
        res.json({
          ...content,
          products
        })
      })
    })
  })
})

app.listen(3000, () => 'server running on port 3000')
