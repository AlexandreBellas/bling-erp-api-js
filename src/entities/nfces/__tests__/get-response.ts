export default {
  data: [
    {
      id: 12345678,
      tipo: 1 as const,
      situacao: 1 as const,
      numero: '6541',
      chaveAcesso: '62634519764512837946527549134679858182373412',
      dataEmissao: '2023-01-12 09:52:12',
      dataOperacao: '2023-01-12 09:52:12',
      contato: {
        id: 12345678,
        nome: 'Contato do Bling',
        numeroDocumento: '30188025000121',
        ie: '7364873393',
        rg: '451838701',
        telefone: '54 3771-7278',
        email: 'pedrosilva@bling.com.br',
        endereco: {
          endereco: 'Olavo Bilac',
          numero: '914',
          complemento: 'Sala 101',
          bairro: 'Imigrante',
          cep: '95702-000',
          municipio: 'Bento Gonçalves',
          uf: 'RS' as const,
          pais: ''
        }
      },
      naturezaOperacao: {
        id: 12345678
      },
      loja: {
        id: 12345678
      }
    }
  ]
}
