'use strict'

import CommercialProposals from './entities/commercialProposals'
import Contacts from './entities/contacts'
import Deposits from './entities/deposits'
import Products from './entities/products'
import Orders from './entities/orders'
import PurchaseOrders from './entities/purchaseOrders'

import createError, {
  IBlingError as IStandardBlingError
} from './core/createError'

import axios, { AxiosInstance } from 'axios'

export type ICommercialProposals = CommercialProposals
export type IContacts = Contacts
export type IDeposits = Deposits
export type IProducts = Products
export type IOrders = Orders
export type IPurchaseOrders = PurchaseOrders

export type IBlingError = IStandardBlingError

export class Bling {
  #api: AxiosInstance
  #apiKey: string
  #commercialProposals: ICommercialProposals | undefined
  #contacts: IContacts | undefined
  #deposits: IDeposits | undefined
  #orders: IOrders | undefined
  #products: IProducts | undefined
  #purchaseOrders: IPurchaseOrders | undefined

  constructor (apiKey: string) {
    if (!apiKey || typeof apiKey !== 'string') {
      throw createError(
        "The API key wasn't correctly provided for Bling connection.",
        500,
        apiKey,
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

    this.#apiKey = apiKey
    this.#api = api
  }

  public commercialProposals () {
    if (!this.#commercialProposals) {
      this.#commercialProposals = new CommercialProposals(
        this.#api,
        this.#apiKey
      )
    }
    return this.#commercialProposals
  }

  public propostasComerciais () {
    return this.commercialProposals()
  }

  public contacts () {
    if (!this.#contacts) {
      this.#contacts = new Contacts(this.#api, this.#apiKey)
    }
    return this.#contacts
  }

  public contatos () {
    return this.contacts()
  }

  public deposits () {
    if (!this.#deposits) {
      this.#deposits = new Deposits(this.#api, this.#apiKey)
    }
    return this.#deposits
  }

  public depositos () {
    return this.deposits()
  }

  public orders () {
    if (!this.#orders) {
      this.#orders = new Orders(this.#api, this.#apiKey)
    }
    return this.#orders
  }

  public pedidos () {
    return this.orders()
  }

  public products () {
    if (!this.#products) {
      this.#products = new Products(this.#api, this.#apiKey)
    }
    return this.#products
  }

  public produtos () {
    return this.products()
  }

  public purchaseOrders () {
    if (!this.#purchaseOrders) {
      this.#purchaseOrders = new PurchaseOrders(this.#api, this.#apiKey)
    }
    return this.#purchaseOrders
  }

  public pedidosDeCompra () {
    return this.purchaseOrders()
  }
}
