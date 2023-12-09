export default {
  data: {
    id: 12345678,
    numeroRPS: '123',
    serie: '1'
  }
}

export const createRequestBody = {
  numero: '123',
  numeroRPS: '32',
  serie: '1',
  dataEmissao: '2023-01-12',
  contato: {
    id: 12345678,
    nome: 'Pedro Silva',
    numeroDocumento: '30188025000121',
    email: 'pedrosilva@bling.com.br',
    ie: '949895756023',
    telefone: '54 3771-7278',
    endereco: {
      endereco: 'Olavo Bilac',
      numero: '914',
      complemento: 'Sala 101',
      bairro: 'Imigrante',
      cep: '95702-000',
      municipio: 'Bento Gonçalves',
      uf: 'RS' as const
    }
  },
  link: 'https://linkexemplo.com.br/nfse',
  codigoVerificacao: 'string',
  data: '2023-01-12',
  reterISS: false,
  desconto: 15.45,
  vendedor: {
    id: 12345678
  },
  servicos: [
    {
      codigo: '10301',
      descricao: 'Pintura',
      valor: 100.25
    }
  ],
  parcelas: [
    {
      data: '2023-01-12',
      valor: 123.45,
      observacoes: 'Observação da parcela',
      formaPagamento: {
        id: 12345678
      }
    }
  ]
}
