export default null

export const updateRequestBody = {
  tipoEstoque: 'F' as const,
  lancamentoEstoque: 'A' as const,
  componentes: [
    {
      produto: {
        id: 1
      },
      quantidade: 2.1
    }
  ]
}
