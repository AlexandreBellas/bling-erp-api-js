import { IApiInstance } from '../interfaces/method'

import axios from 'axios'

export default abstract class Method {
  protected api: IApiInstance = axios
  protected endpoint?: string
  protected singularName = ''
  protected pluralName = ''

  constructor (args?: {
    api: IApiInstance
    endpoint?: string
    singularName: string
    pluralName: string
  }) {
    if (args) {
      this.api = args.api
      this.endpoint = args.endpoint
      this.singularName = args.singularName
      this.pluralName = args.pluralName
    }
  }
}
