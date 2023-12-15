export default {
  data: {
    id: 12345678,
    numeroPlp: '749fdc73',
    situacao: -3 as const,
    descricao: 'Remessa_18092023',
    dataCriacao: '2023-09-18',
    logistica: {
      id: 12345678
    },
    objetos: [
      {
        id: 1235456,
        remessa: {
          id: 12345678
        },
        pedidoVenda: {
          id: 12345678
        },
        notaFiscal: {
          id: 12345678
        },
        servico: {
          id: 12345678,
          nome: 'SEDEX 10 A VISTA',
          codigo: '04790'
        },
        rastreamento: {
          codigo: 'EC272330554BR',
          descricao: 'Criado',
          situacao: 1 as const,
          origem: 'São Paulo, SP',
          destino: 'São Paulo, SP',
          ultimaAlteracao: '2020-11-11 16:40:33',
          url: 'https://www.rastreamento.exemplo.com.br/EC272330554BR'
        },
        dimensao: {
          peso: 1.5,
          altura: 1.5,
          largura: 1.5,
          comprimento: 1.5,
          diametro: 1.5
        },
        embalagem: {
          id: 12345678
        },
        dataSaida: '2022-12-01',
        prazoEntregaPrevisto: 15,
        fretePrevisto: 59.9,
        valorDeclarado: 55.9,
        avisoRecebimento: false,
        maoPropria: false
      }
    ]
  }
}
