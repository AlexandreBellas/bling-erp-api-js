import Bling from 'bling-erp-api'
import express, { Request, Response } from 'express'
import fs from 'fs'

const tmpFile = './access.json'
const app = express()
app.use(express.urlencoded({ extended: true }))

app.post('/', (req: Request, res: Response) => {
  const { client_id: clientId, client_secret: clientSecret } = req.body
  const state = '1234567890'
  const redirectUri = 'http://localhost:3000/auth'

  fs.writeFileSync(tmpFile, JSON.stringify({ clientId, clientSecret }))

  const bling = Bling.create({
    auth: {
      method: 'oauth',
      clientId,
      clientSecret
    }
  })

  res.redirect(
    bling.auth.getAuthorizationUrl({
      state,
      redirectUri
    })
  )
})

app.get('/auth', async (req: Request, res: Response) => {
  const { code } = req.query
  const { clientId, clientSecret } = JSON.parse(
    fs.readFileSync(tmpFile).toString()
  )
  fs.rmSync(tmpFile)

  const bling = Bling.create({
    auth: {
      method: 'oauth',
      clientId,
      clientSecret
    }
  })

  const tokens = await bling.auth.exchangeAuthorizationCode(String(code))
  const products = await bling.produtos.get()

  res.json({
    ...tokens,
    products
  })
})

app.listen(3000, () => 'server running on port 3000')
