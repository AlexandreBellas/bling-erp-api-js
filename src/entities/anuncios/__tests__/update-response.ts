import { IUpdateBody } from '../interfaces/update.interface'

export default null

export const updateRequestBody: IUpdateBody = {
  produto: {
    id: 123
  },
  integracao: {
    tipo: 'MercadoLivre'
  },
  loja: {
    id: 1
  },
  nome: 'Nome do anúncio',
  descricao: 'Descrição do anúncio',
  preco: {
    valor: 100.5,
    promocional: 90
  },
  anuncioLoja: {
    id: 456
  },
  estoques: {
    itens: [1234567, 7654321]
  },
  categoria: {
    id: 'MLB123'
  },
  atributos: [
    {
      id: 'COLOR',
      valor: 'Azul'
    }
  ],
  imagens: [
    {
      url: 'https://exemplo.com/imagem.jpg',
      ordem: 1
    }
  ],
  mercadoLivre: {
    modalidade: 'gold_pro',
    catalogo: {
      id: 123
    },
    grade: {
      id: 987
    },
    frete: {
      gratis: true,
      tipo: 1
    },
    produtoUsuario: {
      id: 321,
      ativo: true
    }
  },
  variacoes: [
    {
      produto: {
        id: 123
      },
      integracao: {
        tipo: 'MercadoLivre'
      },
      loja: {
        id: 1
      },
      nome: 'Nome do anúncio',
      descricao: 'Descrição do anúncio',
      preco: {
        valor: 100.5,
        promocional: 90
      },
      anuncioLoja: {
        id: 456
      },
      estoques: {
        itens: [1234567, 7654321]
      },
      categoria: {
        id: 'MLB123'
      },
      atributos: [
        {
          id: 'COLOR',
          valor: 'Azul'
        }
      ],
      imagens: [
        {
          url: 'https://exemplo.com/imagem.jpg',
          ordem: 1
        }
      ],
      mercadoLivre: {
        modalidade: 'gold_pro',
        catalogo: {
          id: 123
        },
        grade: {
          id: 987
        },
        frete: {
          gratis: true,
          tipo: 1
        },
        produtoUsuario: {
          id: 321,
          ativo: true
        }
      }
    }
  ]
}
