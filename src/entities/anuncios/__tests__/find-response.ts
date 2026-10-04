import { IFindResponse } from '../interfaces/find.interface'

const findResponse: IFindResponse = {
  data: {
    id: 1,
    anuncioLoja: {
      id: 'MLB7468382134'
    },
    preco: {
      valor: 118,
      promocional: 118
    },
    produto: {
      id: 12345
    },
    titulo: 'Anúncio 1',
    descricao: 'Descrição do anúncio.',
    status: 1,
    atributos: [
      {
        id: 123,
        id_externo: 'COR',
        nome: 'Cor',
        tipo: 'string',
        valor: 'Azul',
        unidade: 'cm'
      }
    ],
    imagens: [
      {
        id: 456,
        url: 'https://exemplo.com/imagem.jpg',
        ordem: 1,
        tipo: 'principal'
      }
    ],
    variacoes: [
      {
        id: 789,
        nome: 'Vermelho / P'
      }
    ]
  }
}

export default findResponse
