import { IFormatoDocumento } from '../types/formato-documento.type'

export interface IDownloadDocumentParams {
  /**
   * Chave de acesso da NF-e
   */
  chaveAcesso: string
  /**
   * Formato do documento. `pdf` para o DANFE em PDF, `xml` para o XML da NF-e.
   */
  formato: IFormatoDocumento
}

export interface IDownloadDocumentResponse {
  data: {
    nome?: string
    /**
     * Conteúdo do documento comprimido com GZIP e codificado em base64.
     */
    conteudo?: string
  }[]
}
