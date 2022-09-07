import chance from 'chance'
import { CPF, CNPJ } from 'cpf_cnpj'

import nullable from './helpers/nullable'
import stringifyDate from './helpers/stringifyDate'
import cidades from './template/cidade'
import contribuinte from './template/contribuinte'

import ufs from './template/uf'

const seed = chance()

const generator = () => {
  const tipopessoa = seed.pickone(['F', 'J'])

  let cpfcnpj

  if (tipopessoa === 'F') {
    cpfcnpj = CPF.generate()
  } else {
    cpfcnpj = CNPJ.generate()
  }

  const uf = ufs()
  const cidade = cidades(uf)
  const rawContribuinteVal = nullable(contribuinte())
  const contribuinteVal = rawContribuinteVal === '1' ? '2' : rawContribuinteVal

  const entity = {
    numeropedido: seed.string({
      symbols: false,
      alpha: false,
      numeric: true,
      length: 10
    }),
    datacompra: nullable(stringifyDate(seed.date({ max: new Date(2025, 0) }))),
    dataprevista: nullable(
      stringifyDate(seed.date({ max: new Date(2025, 0) }))
    ),
    ordemcompra: nullable(seed.string({ length: 30 })),
    desconto: nullable(seed.integer({ min: 0, max: 100 })),
    observacoes: nullable(seed.paragraph()),
    observacaointerna: nullable(seed.paragraph()),
    // idcategoria?: number
    fornecedor: {
      // id: nullable(seed.integer({min: 0})),
      nome: seed.sentence({ words: 7 }),
      tipopessoa,
      cpfcnpj,
      contribuinte: contribuinteVal,
      ie: contribuinteVal ? (contribuinteVal === '2' ? 'ISENTO' : null) : null,
      endereco: seed.street(),
      endereconro: nullable(
        seed.string({ length: 5, symbols: false, alpha: true, numeric: true })
      ),
      complemento: nullable(seed.sentence({ words: 5 })),
      bairro: seed.province(),
      uf,
      cidade,
      cep: seed.string({
        length: 8,
        alpha: false,
        symbols: false,
        numeric: true
      }),
      fone: seed.string({
        length: 8,
        alpha: false,
        numeric: true,
        symbols: false
      }),
      celular: nullable(seed.string({ length: 9, alpha: false }), 10),
      email: seed.email()
    }
  }

  const numItems = seed.integer({ min: 1, max: 10 })
  entity.itens = []

  for (let i = 0; i < numItems; i++) {
    const item = {
      codigo: seed.string({
        symbols: false,
        numeric: true,
        alpha: true,
        length: 20
      }),
      descricao: seed.sentence({ words: 7 }),
      un: seed.pickone(['pc', 'un', 'cx']),
      qtde: seed.integer({ min: 1, max: 1000 }),
      valor: seed.floating({ min: 0, max: 1000, fixed: 10 })
    }

    entity.itens.push({ item })
  }

  if (seed.bool({ likelihood: 30 })) {
    entity.transporte = {
      transportador: seed.sentence({ words: 5 }),
      freteporconta: seed.pickone(['R', 'D', 'T', '3', '4', 'S']),
      qtdvolumes: seed.integer({ min: 0, max: 11 }),
      frete: seed.floating({ min: 0, fixed: 2, max: 1000 })
    }
  }

  // if (seed.bool({ likelihood: 10 })) {
  //   parcelas?: {
  //     parcela?: {
  //       nrodias: number
  //       valor: number
  //       obs?: string
  //       idformapagamento: number
  //     }[]
  //   }
  // }

  return entity
}

export default generator
