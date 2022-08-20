import chance from 'chance'
import nullable from './helpers/nullable'

import { CNPJ } from 'cpf_cnpj'

const seed = chance()

const paymentMethod = () => {
  const situacao = nullable(seed.pickone(['0', '1']))
  let padrao

  if (!situacao || situacao === '0') {
    padrao = '0'
  } else {
    padrao = nullable(seed.pickone(['0', '1']))
  }

  return {
    descricao: seed.sentence({ words: 10 }),
    codigofiscal: nullable(
      seed.pickone([
        '1',
        '2',
        '3',
        '4',
        '5',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '90',
        '99'
      ])
    ),
    condicao: nullable(seed.sentence({ words: 5 })),
    destino: nullable(seed.pickone(['1', '2', '3'])),
    padrao,
    situacao,
    dadoscartao: {
      bandeira: nullable(
        seed.pickone(['1', '2', '3', '4', '5', '6', '7', '8', '9', '99'])
      ),
      tipointegracao: nullable(seed.pickone(['1', '2'])),
      cnpjcredenciadora: CNPJ.generate(),
      autoliquidacao: nullable(seed.pickone(['1', '2']))
    },
    dadostaxas: {
      valoraliquota: nullable(seed.floating({ min: 0, max: 1000, fixed: 2 })),
      valorfixo: nullable(seed.floating({ min: 0, max: 1000, fixed: 2 })),
      prazo: nullable(seed.integer({ min: 0, max: 100 }))
    }
  }
}

export default paymentMethod
