import { Entity } from '../@shared/entity'
import { IChangePasswordBody } from './interfaces/change-password.interface'
import {
  IRecoverPasswordBody,
  IRecoverPasswordResponse
} from './interfaces/recover-password.interface'
import {
  IValidateHashParams,
  IValidateHashResponse
} from './interfaces/validate-hash.interface'

/**
 * Entidade para interação com Usuários.
 *
 * @see https://developer.bling.com.br/referencia#/Usu%C3%A1rios
 */
export class Usuarios extends Entity {
  /**
   * Valida o hash recebido.
   *
   * @param {IValidateHashParams} params Parâmetros da busca.
   *
   * @returns {Promise<IValidateHashResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Usu%C3%A1rios/get_usuarios_verificar_hash
   */
  public async validateHash(
    params: IValidateHashParams
  ): Promise<IValidateHashResponse> {
    return await this.repository.index({
      endpoint: 'usuarios/verificar-hash',
      params: { hash: params.hash }
    })
  }

  /**
   * Redefine senha do usuário.
   *
   * @param {IChangePasswordBody} body Hash de recuperação e a nova senha.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Usu%C3%A1rios/patch_usuarios_redefinir_senha
   */
  public async changePassword(body: IChangePasswordBody): Promise<null> {
    return await this.repository.update({
      endpoint: 'usuarios/redefinir-senha',
      id: '',
      body
    })
  }

  /**
   * Envia solicitação de recuperação de senha.
   *
   * @param {IRecoverPasswordBody} body E-mail para solicitar a recuperação.
   *
   * @returns {Promise<IRecoverPasswordResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Usu%C3%A1rios/post_usuarios_recuperar_senha
   */
  public async recoverPassword(
    body: IRecoverPasswordBody
  ): Promise<IRecoverPasswordResponse> {
    return await this.repository.store({
      endpoint: 'usuarios/recuperar-senha',
      body
    })
  }
}
