// Overall configuration
import { Bling, IBlingError } from '../../src/bling'
import { config } from 'dotenv'

// Generators
import contacts from '../generators/contacts'
import billsToPay from '../generators/billsToPay'
import billsToReceive from '../generators/billsToReceive'
import paymentMethods from '../generators/paymentMethods'
import purchaseOrders from '../generators/purchaseOrders'

// Setup
config()

const testApiKey = process.env.BLING_API_KEY as string
const bling = new Bling(testApiKey)

const exampleContactId = process.env.EXAMPLE_CONTACT_ID as string
const exampleSupplierId = process.env.EXAMPLE_SUPPLIER_ID as string
const exampleSupplierProductId = process.env
  .EXAMPLE_SUPPLIER_PRODUCT_ID as string

const generators = {
  contacts,
  billsToPay,
  billsToReceive,
  paymentMethods,
  purchaseOrders
}

const defaultBeforeEach = (time = 400) =>
  new Promise((resolve) => setTimeout(resolve, time))

export {
  Bling,
  bling,
  IBlingError,
  exampleContactId,
  exampleSupplierId,
  exampleSupplierProductId,
  generators,
  defaultBeforeEach
}
