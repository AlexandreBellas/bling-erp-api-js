/**
 * Tipagem representativa da situação de uma origem.
 *
 * Situações de uma NF-e:
 * `1`: Pendente: Situação inicial.
 * `3`: Cancelada: Nota foi emitida e posteriormente cancelada.
 * `4`: Aguardando recibo: Quando há uma tentativa de envio de uma nota pendente ou rejeitada.
 * `5`: Rejeitada: Rejeição no envio.
 * `6`: Autorizada: Sucesso no envio.
 * `7`: Emitida DANFE: Após emitir a DANFE de uma nota autorizada.
 * `8`: Registrada: Notas importadas no sistema.
 * `9`: Aguardando protocolo: Durante uma tentativa de envio sem sucesso.
 * `10`: Denegada: Devido a pendências do remetente ou destinatário junto à SEFAZ.
 * `11`: Consulta situação: Quando a nota é rejeitada por duplicidade sem diferença na chave de acesso.
 * `12`: Bloqueada: Quando ocorrem várias tentativas de envio que resultam na mesma rejeição.
 * `13`: Contingência: Quando gerado xml e danfe em modo de contingência, aguardando envio da transmissão. Exclusiva da NFC-e.
 *
 * Situações da venda:
 * `0`: Em aberto
 * `1`: Atendido
 * `2`: Cancelado
 * `3`: Em andamento
 * `5`: Faturado parcialmente
 * `6`: Atendido parcialmente
 * `7`: Aguardando pagamento
 * `8`: Pagamento confirmado
 * `10`: Em digitação
 * `11`: Verificado
 * `12`: Checkout parcial
 */
export type IOrigemSituacao =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
