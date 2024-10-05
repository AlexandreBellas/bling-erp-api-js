export default null

export const cancelBankSlipRequest = {
  autenticacao: {
    tipo: 1 as const,
    codigo: "111111"
  },
  origem: {
    id: 5436875653
  },
  conta: {
    id: 6423836115
  },
  motivo: "Cancelado por força maior"
}
