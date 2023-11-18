import ISituacao from '../../@shared/types/situacao.type'

export default {
  id: 12345678,
  idsVinculosAgrupadores: [12345678],
  idsOpcoes: [12345678]
}

export const updateRequestBody = {
  nome: 'Marca',
  situacao: 1 as ISituacao,
  placeholder: 'Informe a marca do produto',
  obrigatorio: false,
  opcoes: [
    {
      id: 12345678,
      nome: 'Opção 1'
    }
  ],
  tamanho: {
    minimo: 1,
    maximo: 10
  },
  agrupadores: [
    {
      id: 12345678
    }
  ]
}
