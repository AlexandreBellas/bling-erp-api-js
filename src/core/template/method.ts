import { IApiInstance } from '../interfaces/method'

import axios from 'axios'

export default abstract class Method {
  protected api: IApiInstance = axios
  protected raw? = false
  protected endpoint?: string
  protected singularName = ''
  protected pluralName = ''

  constructor (args?: {
    api: IApiInstance
    raw?: boolean
    endpoint?: string
    singularName: string
    pluralName: string
  }) {
    if (args) {
      this.api = args.api
      this.endpoint = args.endpoint
      this.singularName = args.singularName
      this.pluralName = args.pluralName

      if (args.raw) {
        this.raw = args.raw
      }
    }
  }
}
