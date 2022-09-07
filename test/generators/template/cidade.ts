import chance from 'chance'
import ufs from './uf'

const seed = chance()

const cities = [
  {
    sigla: 'AC',
    cidade: 'Acrelândia'
  },
  {
    sigla: 'AL',
    cidade: 'Água Branca'
  },
  {
    sigla: 'AM',
    cidade: 'Alvarães'
  },
  {
    sigla: 'AP',
    cidade: 'Cutias'
  },
  {
    sigla: 'BA',
    cidade: 'Acajutiba'
  },
  {
    sigla: 'CE',
    cidade: 'Acarape'
  },
  {
    sigla: 'DF',
    cidade: 'Brasília'
  },
  {
    sigla: 'ES',
    cidade: 'Água Doce do Norte'
  },
  {
    sigla: 'GO',
    cidade: 'Alexânia'
  },
  {
    sigla: 'MA',
    cidade: 'Água Doce do Maranhão'
  },
  {
    sigla: 'MG',
    cidade: 'Abaeté'
  },
  {
    sigla: 'MS',
    cidade: 'Amambaí'
  },
  {
    sigla: 'MT',
    cidade: 'Alta Floresta'
  },
  {
    sigla: 'PA',
    cidade: 'Acará'
  },
  {
    sigla: 'PB',
    cidade: 'Aguiar'
  },
  {
    sigla: 'PE',
    cidade: 'Afrânio'
  },
  {
    sigla: 'PI',
    cidade: 'Alagoinha do Piauí'
  },
  {
    sigla: 'PR',
    cidade: 'Agudos do Sul'
  },
  {
    sigla: 'RJ',
    cidade: 'Arraial do Cabo'
  },
  {
    sigla: 'RN',
    cidade: 'Água Nova'
  },
  {
    sigla: 'RO',
    cidade: 'Alto Paraíso'
  },
  {
    sigla: 'RR',
    cidade: 'Boa Vista'
  },
  {
    sigla: 'RS',
    cidade: 'Aceguá'
  },
  {
    sigla: 'SC',
    cidade: 'Abdon Batista'
  },
  {
    sigla: 'SE',
    cidade: 'Amparo de São Francisco'
  },
  {
    sigla: 'SP',
    cidade: 'Adamantina'
  },
  {
    sigla: 'TO',
    cidade: 'Abreulândia'
  }
]

export default (uf: ReturnType<typeof ufs>) => {
  const filteredCities = cities
    .filter((city) => city.sigla === uf)
    .map((city) => city.cidade)

  return seed.pickone(filteredCities)
}
