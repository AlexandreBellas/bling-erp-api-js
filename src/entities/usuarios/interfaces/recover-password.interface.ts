export interface IRecoverPasswordBody {
  email: string
}

export interface IRecoverPasswordResponse {
  data: { message: string }[]
}
