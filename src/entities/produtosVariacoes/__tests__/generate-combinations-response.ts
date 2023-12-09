export default {
  data: {
    id: 123456789,
    nome: 'Produto 1',
    codigo: 'CODE_123',
    preco: 1,
    tipo: 'P' as const,
    situacao: 'A' as const,
    formato: 'S' as const,
    descricaoCurta: 'Descrição curta',
    dataValidade: '2020-01-01',
    unidade: 'UN',
    pesoLiquido: 1,
    pesoBruto: 1,
    volumes: 1,
    itensPorCaixa: 1,
    gtin: '1234567890123',
    gtinEmbalagem: '1234567890123',
    tipoProducao: 'P' as const,
    condicao: 0 as const,
    freteGratis: false,
    marca: 'Marca',
    descricaoComplementar: 'Descrição complementar',
    linkExterno: 'https://www.google.com',
    observacoes: 'Observações',
    categoria: {
      id: 123456789
    },
    estoque: {
      minimo: 1,
      maximo: 100,
      crossdocking: 1,
      localizacao: '14A'
    },
    actionEstoque: '',
    dimensoes: {
      largura: 1,
      altura: 1,
      profundidade: 1,
      unidadeMedida: 1
    },
    tributacao: {
      origem: 0,
      nFCI: '',
      ncm: '',
      cest: '',
      codigoListaServicos: '',
      spedTipoItem: '',
      codigoItem: '',
      percentualTributos: 0,
      valorBaseStRetencao: 0,
      valorStRetencao: 0,
      valorICMSSubstituto: 0,
      codigoExcecaoTipi: '',
      classeEnquadramentoIpi: '',
      valorIpiFixo: 0,
      codigoSeloIpi: '',
      valorPisFixo: 0,
      valorCofinsFixo: 0,
      codigoANP: '',
      descricaoANP: '',
      percentualGLP: 0,
      percentualGasNacional: 0,
      percentualGasImportado: 0,
      valorPartida: 0,
      tipoArmamento: 0 as const,
      descricaoCompletaArmamento: '',
      dadosAdicionais: '',
      grupoProduto: {
        id: 123456789
      }
    },
    midia: {
      video: {
        url: 'https://www.youtube.com/watch?v=1'
      },
      imagens: {
        externas: [
          {
            link: 'https://shutterstock.com/lalala123'
          }
        ]
      }
    },
    linhaProduto: {
      id: 1
    },
    estrutura: {
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
    },
    camposCustomizados: [
      {
        idCampoCustomizado: 123456789,
        idVinculo: 'Utilize para atualizar o valor existente. Ex: 123456789',
        valor: '256GB',
        item: 'Opção A'
      }
    ],
    variacoes: [
      {
        id: 123456789,
        nome: 'Produto 1',
        codigo: 'CODE_123',
        preco: 1,
        tipo: 'P' as const,
        situacao: 'A' as const,
        formato: 'S' as const,
        descricaoCurta: 'Descrição curta',
        dataValidade: '2020-01-01',
        unidade: 'UN',
        pesoLiquido: 1,
        pesoBruto: 1,
        volumes: 1,
        itensPorCaixa: 1,
        gtin: '1234567890123',
        gtinEmbalagem: '1234567890123',
        tipoProducao: 'P' as const,
        condicao: 0 as const,
        freteGratis: false,
        marca: 'Marca',
        descricaoComplementar: 'Descrição complementar',
        linkExterno: 'https://www.google.com',
        observacoes: 'Observações',
        categoria: {
          id: 123456789
        },
        estoque: {
          minimo: 1,
          maximo: 100,
          crossdocking: 1,
          localizacao: '14A'
        },
        actionEstoque: '',
        dimensoes: {
          largura: 1,
          altura: 1,
          profundidade: 1,
          unidadeMedida: 1
        },
        tributacao: {
          origem: 0,
          nFCI: '',
          ncm: '',
          cest: '',
          codigoListaServicos: '',
          spedTipoItem: '',
          codigoItem: '',
          percentualTributos: 0,
          valorBaseStRetencao: 0,
          valorStRetencao: 0,
          valorICMSSubstituto: 0,
          codigoExcecaoTipi: '',
          classeEnquadramentoIpi: '',
          valorIpiFixo: 0,
          codigoSeloIpi: '',
          valorPisFixo: 0,
          valorCofinsFixo: 0,
          codigoANP: '',
          descricaoANP: '',
          percentualGLP: 0,
          percentualGasNacional: 0,
          percentualGasImportado: 0,
          valorPartida: 0,
          tipoArmamento: 0 as const,
          descricaoCompletaArmamento: '',
          dadosAdicionais: '',
          grupoProduto: {
            id: 123456789
          }
        },
        midia: {
          video: {
            url: 'https://www.youtube.com/watch?v=1'
          },
          imagens: {
            externas: [
              {
                link: 'https://shutterstock.com/lalala123'
              }
            ]
          }
        },
        linhaProduto: {
          id: 1
        },
        estrutura: {
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
        },
        camposCustomizados: [
          {
            idCampoCustomizado: 123456789,
            idVinculo:
              'Utilize para atualizar o valor existente. Ex: 123456789',
            valor: '256GB',
            item: 'Opção A'
          }
        ],
        variacao: {
          nome: 'Tamanho:G;Cor:Verde',
          ordem: 1,
          produtoPai: {
            cloneInfo: true
          }
        }
      }
    ]
  }
}

export const generateCombinationsRequest = {
  produtoPai: {
    id: 123456789
  },
  atributos: [
    {
      nome: 'Cor',
      opcoes: ['Azul', 'Vermelho']
    }
  ]
}
