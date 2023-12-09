export default {
  data: {
    id: 12345678
  }
}

export const createRequestBody = {
  nome: 'Contato',
  codigo: 'ASD001',
  situacao: 'A' as const,
  numeroDocumento: '12345678910',
  telefone: '(54) 3333-4444',
  celular: '(54) 99999-8888',
  fantasia: 'Nome fantasia',
  tipo: 'J' as const,
  indicadorIe: 1 as const,
  ie: '123.456.789.101',
  rg: '1234567890',
  orgaoEmissor: '1234567890',
  email: 'contato@email.com',
  endereco: {
    geral: {
      endereco: 'R. Olavo Bilac',
      cep: '95702-000',
      bairro: 'Imigrante',
      municipio: 'Bento Gonçalves',
      uf: 'RS' as const,
      numero: '914',
      complemento: 'Sede 101'
    },
    cobranca: {
      endereco: 'R. Olavo Bilac',
      cep: '95702-000',
      bairro: 'Imigrante',
      municipio: 'Bento Gonçalves',
      uf: 'RS' as const,
      numero: '914',
      complemento: 'Sede 101'
    }
  },
  vendedor: {
    id: 12345678
  },
  dadosAdicionais: {
    dataNascimento: '1990-08-24',
    sexo: 'M' as const,
    naturalidade: 'Brasileira'
  },
  financeiro: {
    limiteCredito: 0,
    condicaoPagamento: '30',
    categoria: {
      id: 12345678
    }
  },
  pais: {
    nome: 'ESTADOS UNIDOS'
  },
  tiposContato: [
    {
      id: 12345678,
      descricao: 'Fornecedor'
    }
  ],
  pessoasContato: [
    {
      id: 12345678,
      descricao: 'Fornecedor Fulano'
    }
  ]
}
