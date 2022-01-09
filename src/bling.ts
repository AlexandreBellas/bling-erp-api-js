'use strict'

import Borderos from './entities/borderos'
import CustomizedField from './entities/customizedFields'
import Categories from './entities/categories'
import CommercialProposals from './entities/commercialProposals'
import Contacts from './entities/contacts'
import Deposits from './entities/deposits'
import Products from './entities/products'
import Orders from './entities/orders'
import PurchaseOrders from './entities/purchaseOrders'
import Invoices from './entities/invoices'
import ShopCategories from './entities/shopCategories'
import BillsToPay from './entities/billsToPay'
import BillsToReceive from './entities/billsToReceive'
import Contracts from './entities/contracts'
import Ctes from './entities/ctes'
import PaymentMethods from './entities/paymentMethods'
import GroupProducts from './entities/productGroups'

import createError, {
  IBlingError as IStandardBlingError
} from './core/helpers/createError'

import { IApiInstance } from './core/interfaces/method'

import * as qs from 'querystring'
import axios from 'axios'

export type IBordero = ReturnType<typeof Borderos>
export type ICustomizedFields = ReturnType<typeof CustomizedField>
export type ICategories = ReturnType<typeof Categories>
export type ICommercialProposals = ReturnType<typeof CommercialProposals>
export type IContacts = ReturnType<typeof Contacts>
export type IDeposits = ReturnType<typeof Deposits>
export type IProducts = ReturnType<typeof Products>
export type IOrders = ReturnType<typeof Orders>
export type IPurchaseOrders = ReturnType<typeof PurchaseOrders>
export type IInvoices = ReturnType<typeof Invoices>
export type IShopCategories = ReturnType<typeof ShopCategories>
export type IBillsToPay = ReturnType<typeof BillsToPay>
export type IBillsToReceive = ReturnType<typeof BillsToReceive>
export type IContracts = ReturnType<typeof Contracts>
export type ICtes = ReturnType<typeof Ctes>
export type IPaymentMethods = ReturnType<typeof PaymentMethods>
export type IGroupProducts = ReturnType<typeof GroupProducts>

export type IBlingError = IStandardBlingError

export class Bling {
  #api: IApiInstance
  #borderos: IBordero | undefined
  #customizedFields: ICustomizedFields | undefined
  #categories: ICategories | undefined
  #commercialProposals: ICommercialProposals | undefined
  #contacts: IContacts | undefined
  #deposits: IDeposits | undefined
  #orders: IOrders | undefined
  #products: IProducts | undefined
  #purchaseOrders: IPurchaseOrders | undefined
  #invoices: IInvoices | undefined
  #shopCategories: IShopCategories | undefined
  #billsToPay: IBillsToPay | undefined
  #billsToReceive: IBillsToReceive | undefined
  #contracts: IContracts | undefined
  #ctes: ICtes | undefined
  #paymentMethods: IPaymentMethods | undefined
  #groupProducts: IGroupProducts | undefined

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
      if (
        config.method &&
        ['POST', 'PUT', 'post', 'put'].includes(config.method)
      ) {
        config.data = qs.stringify({
          apikey: apiKey,
          ...config.data
        })
      }

      config.params = {
        apikey: apiKey,
        ...config.params
      }

      return config
    })

    this.#api = api
  }

  public borderos () {
    if (!this.#borderos) {
      this.#borderos = Borderos(this.#api)
    }
    return this.#borderos
  }

  public customizedFields () {
    if (!this.#customizedFields) {
      this.#customizedFields = CustomizedField(this.#api)
    }
    return this.#customizedFields
  }

  public camposCustomizados () {
    return this.customizedFields()
  }

  public categories () {
    if (!this.#categories) {
      this.#categories = Categories(this.#api)
    }
    return this.#categories
  }

  public categorias () {
    return this.categories()
  }

  public shopCategories () {
    if (!this.#shopCategories) {
      this.#shopCategories = ShopCategories(this.#api)
    }
    return this.#shopCategories
  }

  public categoriasLoja () {
    return this.shopCategories()
  }

  public contacts () {
    if (!this.#contacts) {
      this.#contacts = Contacts(this.#api)
    }
    return this.#contacts
  }

  public contatos () {
    return this.contacts()
  }

  public billsToPay () {
    if (!this.#billsToPay) {
      this.#billsToPay = BillsToPay(this.#api)
    }
    return this.#billsToPay
  }

  public contasAPagar () {
    return this.billsToPay()
  }

  public billsToReceive () {
    if (!this.#billsToReceive) {
      this.#billsToReceive = BillsToReceive(this.#api)
    }
    return this.#billsToReceive
  }

  public contasAReceber () {
    return this.billsToReceive()
  }

  public contracts () {
    if (!this.#contracts) {
      this.#contracts = Contracts(this.#api)
    }
    return this.#contracts
  }

  public contratos () {
    return this.contracts()
  }

  public ctes () {
    if (!this.#ctes) {
      this.#ctes = Ctes(this.#api)
    }
    return this.#ctes
  }

  public deposits () {
    if (!this.#deposits) {
      this.#deposits = Deposits(this.#api)
    }
    return this.#deposits
  }

  public depositos () {
    return this.deposits()
  }

  public paymentMethods () {
    if (!this.#paymentMethods) {
      this.#paymentMethods = PaymentMethods(this.#api)
    }
    return this.#paymentMethods
  }

  public formasDePagamento () {
    return this.paymentMethods()
  }

  public groupProducts () {
    if (!this.#groupProducts) {
      this.#groupProducts = GroupProducts(this.#api)
    }
    return this.#groupProducts
  }

  public grupoDeProdutos () {
    return this.groupProducts()
  }

  public invoices () {
    if (!this.#invoices) {
      this.#invoices = Invoices(this.#api)
    }
    return this.#invoices
  }

  public notasFiscais () {
    return this.invoices()
  }

  public orders () {
    if (!this.#orders) {
      this.#orders = Orders(this.#api)
    }
    return this.#orders
  }

  public pedidos () {
    return this.orders()
  }

  public purchaseOrders () {
    if (!this.#purchaseOrders) {
      this.#purchaseOrders = PurchaseOrders(this.#api)
    }
    return this.#purchaseOrders
  }

  public pedidosDeCompra () {
    return this.purchaseOrders()
  }

  public products () {
    if (!this.#products) {
      this.#products = Products(this.#api)
    }
    return this.#products
  }

  public produtos () {
    return this.products()
  }

  public commercialProposals () {
    if (!this.#commercialProposals) {
      this.#commercialProposals = CommercialProposals(this.#api)
    }
    return this.#commercialProposals
  }

  public propostasComerciais () {
    return this.commercialProposals()
  }
}
