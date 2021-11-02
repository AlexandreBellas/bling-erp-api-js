import { Bling } from '../../lib/bling'
import { IBlingError } from '../../src/bling'
import { config } from 'dotenv'

config()

const testApiKey = process.env.BLING_API_KEY as string
const bling = new Bling(testApiKey)

export { bling, IBlingError }
