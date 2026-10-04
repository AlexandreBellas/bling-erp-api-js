export interface IAnunciosSaveRequestBaseWrite {
  produto: {
    /**
     * ID do produto pai
     */
    id: number
  }
  integracao: {
    /**
     * Tipo da integração
     */
    tipo: string
  }
  loja: {
    /**
     * ID da loja
     */
    id: number
  }
  nome?: string
  descricao?: string
  preco?: {
    valor?: number
    promocional?: number
  }
  anuncioLoja?: {
    id?: number
  }
  estoques?: {
    itens?: number[]
  }
  categoria?: {
    id?: string
  }
  atributos?: {
    id?: string
    valor?: string
  }[]
  imagens?: {
    url?: string
    ordem?: number
  }[]
  mercadoLivre?: {
    modalidade?: string
    catalogo?: {
      id?: number
    }
    grade?: {
      id?: number
    }
    frete?: {
      gratis?: boolean
      tipo?: number
    }
    produtoUsuario?: {
      id?: number
      ativo?: boolean
    }
  } | null
}

export interface IAnunciosSaveResponseDTO {
  /**
   * ID do anúncio salvo.
   */
  id?: number
  /**
   * Lista de IDs das variações associadas ao anúncio.
   */
  idsVariacoes?: number[]
}

export interface ICreateBody {
  produto: {
    /**
     * ID do produto pai
     */
    id: number
  }
  integracao: {
    /**
     * Tipo da integração
     */
    tipo: string
  }
  loja: {
    /**
     * ID da loja
     */
    id: number
  }
  nome?: string
  descricao?: string
  preco?: {
    valor?: number
    promocional?: number
  }
  anuncioLoja?: {
    id?: number
  }
  estoques?: {
    itens?: number[]
  }
  categoria?: {
    id?: string
  }
  atributos?: {
    id?: string
    valor?: string
  }[]
  imagens?: {
    url?: string
    ordem?: number
  }[]
  mercadoLivre?: {
    modalidade?: string
    catalogo?: {
      id?: number
    }
    grade?: {
      id?: number
    }
    frete?: {
      gratis?: boolean
      tipo?: number
    }
    produtoUsuario?: {
      id?: number
      ativo?: boolean
    }
  } | null
  variacoes?: IAnunciosSaveRequestBaseWrite[]
}

export interface ICreateResponse {
  data?: IAnunciosSaveResponseDTO
}
