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
import ProductGroups from './entities/productGroups'
import Nfces from './entities/nfces'
import ServiceInvoices from './entities/serviceInvoices'

import createError, {
  IBlingError as IStandardBlingError
} from './core/helpers/createError'

import { IApiInstance } from './core/interfaces/method'

import * as qs from 'querystring'
import axios from 'axios'

export type IBorderos = ReturnType<typeof Borderos>
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
export type IProductGroups = ReturnType<typeof ProductGroups>
export type INfces = ReturnType<typeof Nfces>
export type IServiceInvoices = ReturnType<typeof ServiceInvoices>

export type IBlingError = IStandardBlingError

export class Bling {
  #api: IApiInstance
  #raw: boolean

  #borderos: IBorderos | undefined
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
  #productGroups: IProductGroups | undefined
  #nfces: INfces | undefined
  #serviceInvoices: IServiceInvoices | undefined

  constructor (apiKey: string, options: { raw: boolean } = { raw: false }) {
    if (!apiKey || typeof apiKey !== 'string') {
      throw createError({
        name: 'BlingModuleError',
        message: "The API key wasn't correctly provided for Bling connection.",
        status: '500',
        data: {
          apiKey: apiKey
        },
        code: 'ERR_NO_API_KEY'
      })
    }

    if (typeof options.raw !== 'boolean') {
      throw createError({
        name: 'BlingModuleError',
        message:
          'The raw attribute must be a boolean to configure the Bling connection.',
        status: '500',
        data: {
          raw: options.raw
        },
        code: 'ERR_WRONG_BLING_RAW_ATTR'
      })
    }

    this.#raw = options.raw

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

  static create (apiKey: string, options: { raw: boolean } = { raw: false }) {
    return new this(apiKey, options)
  }

  public borderos () {
    if (!this.#borderos) {
      this.#borderos = Borderos(this.#api, this.#raw)
    }
    return this.#borderos
  }

  public customizedFields () {
    if (!this.#customizedFields) {
      this.#customizedFields = CustomizedField(this.#api, this.#raw)
    }
    return this.#customizedFields
  }

  public camposCustomizados () {
    return this.customizedFields()
  }

  public categories () {
    if (!this.#categories) {
      this.#categories = Categories(this.#api, this.#raw)
    }
    return this.#categories
  }

  public categorias () {
    return this.categories()
  }

  public shopCategories () {
    if (!this.#shopCategories) {
      this.#shopCategories = ShopCategories(this.#api, this.#raw)
    }
    return this.#shopCategories
  }

  public categoriasLoja () {
    return this.shopCategories()
  }

  public contacts () {
    if (!this.#contacts) {
      this.#contacts = Contacts(this.#api, this.#raw)
    }
    return this.#contacts
  }

  public contatos () {
    return this.contacts()
  }

  public billsToPay () {
    if (!this.#billsToPay) {
      this.#billsToPay = BillsToPay(this.#api, this.#raw)
    }
    return this.#billsToPay
  }

  public contasAPagar () {
    return this.billsToPay()
  }

  public billsToReceive () {
    if (!this.#billsToReceive) {
      this.#billsToReceive = BillsToReceive(this.#api, this.#raw)
    }
    return this.#billsToReceive
  }

  public contasAReceber () {
    return this.billsToReceive()
  }

  public contracts () {
    if (!this.#contracts) {
      this.#contracts = Contracts(this.#api, this.#raw)
    }
    return this.#contracts
  }

  public contratos () {
    return this.contracts()
  }

  public ctes () {
    if (!this.#ctes) {
      this.#ctes = Ctes(this.#api, this.#raw)
    }
    return this.#ctes
  }

  public deposits () {
    if (!this.#deposits) {
      this.#deposits = Deposits(this.#api, this.#raw)
    }
    return this.#deposits
  }

  public depositos () {
    return this.deposits()
  }

  public paymentMethods () {
    if (!this.#paymentMethods) {
      this.#paymentMethods = PaymentMethods(this.#api, this.#raw)
    }
    return this.#paymentMethods
  }

  public formasDePagamento () {
    return this.paymentMethods()
  }

  public productGroups () {
    if (!this.#productGroups) {
      this.#productGroups = ProductGroups(this.#api, this.#raw)
    }
    return this.#productGroups
  }

  public grupoDeProdutos () {
    return this.productGroups()
  }

  public nfces () {
    if (!this.#nfces) {
      this.#nfces = Nfces(this.#api, this.#raw)
    }
    return this.#nfces
  }

  public invoices () {
    if (!this.#invoices) {
      this.#invoices = Invoices(this.#api, this.#raw)
    }
    return this.#invoices
  }

  public notasFiscais () {
    return this.invoices()
  }

  public serviceInvoices () {
    if (!this.#serviceInvoices) {
      this.#serviceInvoices = ServiceInvoices(this.#api, this.#raw)
    }
    return this.#serviceInvoices
  }

  public notasServicos () {
    return this.serviceInvoices()
  }

  public orders () {
    if (!this.#orders) {
      this.#orders = Orders(this.#api, this.#raw)
    }
    return this.#orders
  }

  public pedidos () {
    return this.orders()
  }

  public purchaseOrders () {
    if (!this.#purchaseOrders) {
      this.#purchaseOrders = PurchaseOrders(this.#api, this.#raw)
    }
    return this.#purchaseOrders
  }

  public pedidosDeCompra () {
    return this.purchaseOrders()
  }

  public products () {
    if (!this.#products) {
      this.#products = Products(this.#api, this.#raw)
    }
    return this.#products
  }

  public produtos () {
    return this.products()
  }

  public commercialProposals () {
    if (!this.#commercialProposals) {
      this.#commercialProposals = CommercialProposals(this.#api, this.#raw)
    }
    return this.#commercialProposals
  }

  public propostasComerciais () {
    return this.commercialProposals()
  }
}
