import chance from 'chance'

import nullable from './helpers/nullable'
import stringifyDate from './helpers/stringifyDate'
import uf from './template/uf'

import { CPF, CNPJ } from 'cpf_cnpj'

const seed = chance()

const generator = () => {
  const obj = {}

  const dateToday = new Date()

  const dataEmissaoDate = seed.date({
    min: new Date(dateToday.getFullYear() - 2, 0),
    max: new Date()
  })
  const dataEmissao = stringifyDate(dataEmissaoDate)

  const vencimentoOriginalDate = nullable(
    seed.date({
      min: dataEmissaoDate,
      max: new Date(
        dataEmissaoDate.getFullYear(),
        dataEmissaoDate.getMonth() + 1,
        dataEmissaoDate.getDate() + 10
      )
    })
  )
  const vencimentoOriginal = stringifyDate(vencimentoOriginalDate)

  const competenciaDate = nullable(
    seed.date({
      max: dataEmissaoDate
    })
  )
  const competencia = stringifyDate(competenciaDate)

  obj.dataEmissao = dataEmissao
  obj.vencimentoOriginal = vencimentoOriginal
  obj.competencia = competencia
  obj.nroDocumento = nullable(
    seed.string({ length: 25, alpha: false, symbols: false, numeric: true }),
    90
  )
  obj.valor = seed.floating({ fixed: 2, min: 0, max: 1000 })
  obj.historico = nullable(seed.paragraph())
  // obj.categoria = nullable(seed.sentence({ words: 3 }))
  // obj.portador = nullable(seed.word())
  // obj.idFormaPagamento = ''
  const ocorrenciaTipo = seed.pickone(['U', 'P', 'M', 'T', 'S', 'A', 'E'])
  const diaVencimento = seed.integer({ min: 1, max: 31 })
  const nroParcelas = seed.integer({ min: 1, max: 200 })
  const diaSemanaVencimento = seed.pickone([1, 2, 3, 4, 5, 6, 7])

  obj.ocorrencia = {
    ocorrenciaTipo,
    diaVencimento: ['P', 'M', 'T', 'S', 'A'].includes(ocorrenciaTipo)
      ? diaVencimento
      : null,
    nroParcelas: ocorrenciaTipo === 'P' ? nroParcelas : null,
    diaSemanaVencimento:
      ocorrenciaTipo === 'E'
        ? diaSemanaVencimento
        : nullable(diaSemanaVencimento)
  }

  const tipoPessoa = seed.pickone(['F', 'J'])
  let cpfCnpj

  if (tipoPessoa === 'F') {
    cpfCnpj = CPF.generate()
  } else {
    cpfCnpj = CNPJ.generate()
  }

  obj.cliente = {
    nome: seed.sentence(),
    // id = ''
    cpf_cnpj: cpfCnpj,
    tipoPessoa,
    ie_rg: nullable(
      seed.string({ alpha: false, symbols: false, numeric: true, length: 18 })
    ),
    endereco: nullable(seed.address()),
    numero: nullable(
      seed.string({ alpha: true, symbols: false, numeric: true })
    ),
    complemento: nullable(seed.sentence()),
    cidade: nullable(seed.city()),
    bairro: nullable(seed.province()),
    cep: nullable(seed.zip()),
    uf: nullable(uf()),
    email: nullable(seed.email()),
    fone: nullable(seed.string({ length: 8, alpha: false, symbols: false })),
    celular: nullable(
      seed.string({ length: 9, alpha: false, symbols: false }),
      10
    )
  }

  return obj
}

export default generator
