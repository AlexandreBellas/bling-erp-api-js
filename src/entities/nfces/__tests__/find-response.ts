export default {
  data: {
    id: 12345678,
    tipo: 1 as const,
    situacao: 1 as const,
    numero: "6541",
    dataEmissao: "2023-01-12 09:52:12",
    dataOperacao: "2023-01-12 09:52:12",
    contato: {
      id: 12345678,
      nome: "Contato do Bling",
      numeroDocumento: "30188025000121",
      ie: "7364873393",
      rg: "451838701",
      telefone: "54 3771-7278",
      email: "pedrosilva@bling.com.br",
      endereco: {
        endereco: "Olavo Bilac",
        numero: "914",
        complemento: "Sala 101",
        bairro: "Imigrante",
        cep: "95702-000",
        municipio: "Bento Gonçalves",
        uf: "RS" as const,
        pais: ""
      }
    },
    naturezaOperacao: {
      id: 12345678
    },
    loja: {
      id: 12345678
    },
    serie: 1,
    valorNota: 10.3,
    chaveAcesso: "string",
    xml: "string",
    linkDanfe: "string",
    linkPDF: "string",
    numeroPedidoLoja: "string",
    transporte: {
      fretePorConta: 0 as const,
      transportador: {
        nome: "Transportador",
        numeroDocumento: "30188025000121"
      },
      volumes: [
        {
          id: 12345678
        }
      ],
      etiqueta: {
        nome: "Transportador",
        endereco: "Olavo Bilac",
        numero: "914",
        complemento: "Sala 101",
        municipio: "Bento Gonçalves",
        uf: "RS" as const,
        cep: "95702-000",
        bairro: "Imigrante"
      }
    },
    vendedor: {
      id: 12345679
    }
  }
}
