import { IApiInstance } from '../interfaces/method'

import axios from 'axios'

export default abstract class Method {
  protected api: IApiInstance = axios
  protected singularName = ''
  protected pluralName = ''

  constructor (args?: {
    api: IApiInstance
    singularName: string
    pluralName: string
  }) {
    if (args) {
      this.api = args.api
      this.singularName = args.singularName
      this.pluralName = args.pluralName
    }
  }
}
