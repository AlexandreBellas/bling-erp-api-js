export default {
  data: {
    id: 12345678,
    descricao: 'Loja de teste',
    tipo: 'Shopee',
    situacao: 1 as const,
    filiais: [
      {
        cnpj: '12.345.678/9012-34',
        unidadeNegocio: 'Empresa Teste',
        deposito: {
          id: 12345678
        },
        padrao: true
      }
    ]
  }
}
