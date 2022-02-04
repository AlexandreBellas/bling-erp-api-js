import { Bling } from '../../lib/bling'
import { IBlingError } from '../../src/bling'
import { config } from 'dotenv'

config()

const testApiKey = process.env.BLING_API_KEY as string
const bling = new Bling(testApiKey)

const exampleContactId = process.env.EXAMPLE_CONTACT_ID as string
const exampleSupplierId = process.env.EXAMPLE_SUPPLIER_ID as string
const exampleSupplierProductId = process.env
  .EXAMPLE_SUPPLIER_PRODUCT_ID as string

export {
  bling,
  IBlingError,
  exampleContactId,
  exampleSupplierId,
  exampleSupplierProductId
}
