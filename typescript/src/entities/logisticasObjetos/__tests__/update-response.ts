export default {
  data: {
    id: 12345678
  }
}

export const updateRequestBody = {
  rastreamento: {
    codigo: 'EC272330554BR',
    descricao: 'Criado',
    situacao: 1 as const,
    origem: 'São Paulo, SP',
    destino: 'São Paulo, SP',
    ultimaAlteracao: '2020-11-11 16:40:33',
    url: 'https://www.rastreamento.exemplo.com.br/EC272330554BR'
  },
  dimensoes: {
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
