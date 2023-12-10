export default {
  data: {
    id: 12345678,
    numero: '6541',
    serie: '1',
    contato: {
      nome: 'Contato do Bling'
    }
  }
}

export const createRequestBody = {
  tipo: 1 as const,
  numero: '6541',
  dataOperacao: '2023-01-12 09:52:12',
  contato: {
    nome: 'Contato do Bling',
    tipoPessoa: 'J' as const,
    numeroDocumento: '30188025000121',
    ie: '7364873393',
    rg: '451838701',
    contribuinte: 1 as const,
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
    id: 12345678,
    numero: 'LOJA_8864'
  },
  finalidade: 1 as const,
  seguro: 1.15,
  despesas: 5.08,
  desconto: 10.12,
  observacoes: 'Observação da nota.',
  documentoReferenciado: {
    modelo: '55' as const,
    data: '2023-01-12',
    numero: '123',
    serie: '1',
    contadorOrdemOperacao: '1',
    chaveAcesso: '62634519764512837946527549134679858182373412'
  },
  itens: [
    {
      codigo: 'BLG-5',
      descricao: 'Produto do Bling',
      unidade: 'UN',
      quantidade: 1,
      valor: 4.9,
      tipo: 'P' as const,
      pesoBruto: 0.5,
      pesoLiquido: 0.5,
      numeroPedidoCompra: '235',
      classificacaoFiscal: '9999.99.99',
      cest: '99.999.99',
      codigoServico: '99.99',
      origem: 0 as const,
      informacoesAdicionais: 'Descrição do item'
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
  ],
  transporte: {
    fretePorConta: 0 as const,
    frete: 20,
    veiculo: {
      placa: 'LDO-2373',
      uf: 'RS' as const,
      marca: 'Volvo'
    },
    transportador: {
      nome: 'Transportador',
      numeroDocumento: '30188025000121',
      ie: '949895756023',
      endereco: {
        endereco: 'Olavo Bilac',
        municipio: 'Bento Gonçalves',
        uf: 'RS' as const
      }
    },
    volume: {
      quantidade: 5,
      especie: 'Volumes',
      numero: '1',
      pesoBruto: 0.5,
      pesoLiquido: 0.35
    },
    volumes: [
      {
        servico: 'ALIAS_123',
        codigoRastreamento: 'COD123BR'
      }
    ],
    etiqueta: {
      nome: 'Transportador',
      endereco: 'Olavo Bilac',
      numero: '914',
      complemento: 'Sala 101',
      municipio: 'Bento Gonçalves',
      uf: 'RS' as const,
      cep: '95702-000',
      bairro: 'Imigrante'
    }
  },
  notaFiscalProdutorRuralReferenciada: {
    numero: '125',
    serie: '1',
    data: '2023-01-12'
  },
  intermediador: {
    cnpj: '13921649000197',
    nomeUsuario: 'usuario'
  }
}
