export default {
  data: {
    alertas: [
      {
        error: {
          type: 'VALIDATION_ERROR' as const,
          message: 'Não foi possível salvar o contato',
          description:
            'O contato não pode ser salvo, pois ocorreram problemas em sua validação.',
          fields: [
            {
              code: 49,
              msg: 'Um ou mais registros possuem erros de validação',
              element: 'contato',
              namespace: 'CONTATOS',
              collection: [
                {
                  index: 1,
                  code: 12,
                  msg: 'Situação inválida.',
                  element: 'situacao',
                  namespace: 'CONTATOS'
                }
              ]
            }
          ]
        }
      }
    ]
  }
}

export const changeSituationManyRequest = {
  idsContatos: [12345678],
  situacao: 'A' as const
}
