// Global imports
import chance from 'chance'
import nullable from './helpers/nullable'
import stringifyDate from './helpers/stringifyDate'
import { CNPJ } from 'cpf_cnpj'

// Template attributes
import uf from './template/uf'
import tipoPessoa from './template/tipoPessoa'
import cpfCnpj from './template/cpfCnpj'
import contribuinte from './template/contribuinte'
import tipoFrete from './template/tipoFrete'
import un from './template/un'
import origem from './template/origem'

// Config
const seed = chance()
const dateToday = new Date()

// Generator
const nfce = () => {
  const dataOperacaoDate = seed.date({
    min: new Date(dateToday.getFullYear() - 2, 0),
    max: new Date()
  })

  const dataOperacao = stringifyDate(dataOperacaoDate)

  const tipoPessoaValue = tipoPessoa()

  const data = {
    tipo: seed.pickone(['E', 'S']),
    numero_loja: nullable(
      seed.string({ length: 6, alpha: false, numeric: true, symbols: false })
    ),
    nat_operacao: nullable(seed.sentence({ words: 5 })),
    data_operacao: nullable(dataOperacao),
    nome: seed.sentence({ words: 3 }),
    tipo_pessoa: tipoPessoaValue,
    cpf_cnpj: nullable(cpfCnpj(tipoPessoaValue)),
    ie_rg: nullable(seed.integer({ min: 100000000000, max: 199999999999 }), 30),
    contribuinte: nullable(contribuinte),
    endereco: seed.street(),
    numero: nullable(seed.integer({ min: 1, max: 500 }), 30),
    complemento: nullable(seed.sentence()),
    bairro: seed.province(),
    cep: seed.zip(),
    cidade: nullable(seed.city(), 30),
    uf: uf(),
    pais: nullable(
      seed.string({ length: 10, alpha: true, numeric: false, symbols: false })
    ),
    fone: nullable(seed.string({ length: 8, alpha: false })),
    email: nullable(seed.email()),
    vlr_frete: nullable(seed.floating({ fixed: 2, min: 0, max: 10000 })),
    vlr_seguro: nullable(seed.floating({ fixed: 2, min: 0, max: 10000 })),
    vlr_despesas: nullable(seed.floating({ fixed: 2, min: 0, max: 10000 })),
    vlr_desconto: nullable(seed.floating({ fixed: 2, min: 0, max: 10000 })),
    obs: seed.paragraph()
  }

  // Transporte
  if (seed.bool()) {
    data.transporte = {
      transportadora: nullable(seed.sentence({ words: 2 })),
      cpf_cnpj: nullable(CNPJ.generate()),
      ie_rg: nullable(
        seed.integer({ min: 100000000000, max: 199999999999 }),
        30
      ),
      endereco: nullable(seed.street()),
      cidade: nullable(seed.city(), 30),
      uf: nullable(uf()),
      placa: nullable(
        seed.string({ length: 7, alpha: true, numeric: true, symbols: false })
      ),
      uf_veiculo: nullable(uf()),
      marca: nullable(seed.string({ length: 10, symbols: false })),
      tipo_frete: nullable(tipoFrete()),
      qtde_volumes: nullable(seed.integer({ min: 1, max: 10 })),
      especie: nullable(seed.sentence({ words: 2 })),
      numero: nullable(seed.string({ length: 10 })),
      peso_bruto: nullable(seed.floating({ fixed: 2, min: 0.1, max: 10 })),
      peso_liquido: nullable(seed.floating({ fixed: 2, min: 0.1, max: 10 })),
      servico_correios: nullable(seed.string({ length: 10, symbols: false }))
    }

    if (seed.bool({ likelihood: 50 })) {
      data.transporte.dados_etiqueta = {
        nome: nullable(seed.sentence({ words: 3 })),
        endereco: nullable(seed.street()),
        numero: nullable(seed.integer({ min: 1, max: 500 }), 30),
        complemento: nullable(seed.sentence()),
        bairro: nullable(seed.province()),
        municipio: nullable(seed.city(), 30),
        uf: nullable(uf()),
        cep: nullable(seed.zip())
      }
    }
  }

  // Itens
  if (seed.bool()) {
    const numItens = seed.integer({ min: 1, max: 4 })
    data.itens = []

    for (let i = 0; i < numItens; i++) {
      data.itens.push({
        item: {
          codigo: nullable(seed.string({ length: 15, symbols: false })),
          descricao: seed.sentence({ words: 5 }),
          un: un(),
          qtde: seed.integer({ min: 1, max: 25 }),
          vlr_unit: seed.floating({ fixed: 2, min: 0, max: 1000 }),
          tipo: seed.pickone(['P', 'S']),
          peso_bruto: nullable(seed.floating({ fixed: 2, min: 0.1, max: 10 })),
          peso_liq: nullable(seed.floating({ fixed: 2, min: 0.1, max: 10 })),
          class_fiscal: nullable(
            seed.string({ length: 8, symbols: false, alpha: false })
          ),
          cest: nullable(
            seed.string({ length: 8, symbols: false, alpha: false })
          ),
          cod_servico: nullable(
            seed.string({ length: 8, symbols: false, alpha: false })
          ),
          origem: origem()
        }
      })
    }
  }

  // Parcelas
  if (seed.bool({ likelihood: 30 })) {
    const numParcelas = seed.integer({ min: 1, max: 4 })

    const dataParcelaDate = seed.date({
      min: new Date(dateToday.getFullYear() - 2, 0),
      max: new Date()
    })

    const dataParcela = stringifyDate(dataParcelaDate)

    const diasOrData = seed.bool()

    data.parcelas = []

    for (let i = 0; i < numParcelas; i++) {
      data.parcelas.push({
        parcela: {
          dias: nullable(diasOrData ? seed.integer({ min: 1, max: 30 }) : null),
          data: nullable(!diasOrData ? dataParcela : null),
          vlr: nullable(seed.floating({ fixed: 2, min: 0.1, max: 1000 })),
          obs: nullable(seed.sentence({ words: 10 })),
          forma: nullable(seed.sentence({ words: 2 }))
        }
      })
    }
  }

  // NF produtor rural referenciada
  if (seed.bool({ likelihood: 10 })) {
    data.nf_produtor_rural_referenciada = {
      numero: nullable(seed.string({ length: 10, symbols: false })),
      serie: nullable(seed.string({ length: 2, symbols: false })),
      ano_mes_emissao: nullable(
        seed.string({ length: 4, alpha: false, symbols: false })
      )
    }
  }

  // Intermediador
  if (seed.bool({ likelihood: 10 })) {
    data.intermediador = {
      cnpj: nullable(CNPJ.generate()),
      nomeUsuario: seed.string({ length: 10, symbols: false })
    }
  }

  return data
}

export default nfce
