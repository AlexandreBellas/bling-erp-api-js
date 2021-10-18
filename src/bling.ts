'use strict'

import Products from './entities/products'
import Orders from './entities/orders'
import axios, { AxiosInstance } from 'axios'

import createError from './core/createError'

export default class Bling {
  private api: AxiosInstance

  constructor (apiKey: string) {
    if (!apiKey || typeof apiKey !== 'string') {
      throw createError(
        "The API key wasn't correctly provided for Bling connection.",
        500,
        this,
        'ERR_NO_API_KEY'
      )
    }

    const api = axios.create({
      baseURL: 'https://bling.com.br/Api/v2'
    })

    api.interceptors.request.use((config) => {
      config.params = {
        apikey: apiKey,
        ...config.params
      }

      return config
    })

    this.api = api
  }

  public products () {
    return new Products(this.api)
  }

  public orders () {
    return new Orders(this.api)
  }
}
