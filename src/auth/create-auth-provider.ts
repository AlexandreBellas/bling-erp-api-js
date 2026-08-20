import { BlingInternalException } from '../exceptions/bling-internal.exception'
import {
  IBlingAuthOptions,
  IJwtAuthOptions,
  IOAuthAuthOptions,
  IOpaqueAuthOptions
} from './interfaces/auth-options.interface'
import { IAuthProvider } from './interfaces/auth-provider.interface'
import { JwtAuthProvider } from './providers/jwt-auth.provider'
import { OAuthAuthProvider } from './providers/oauth-auth.provider'
import { OpaqueAuthProvider } from './providers/opaque-auth.provider'

export function createAuthProvider(auth: IJwtAuthOptions): JwtAuthProvider
export function createAuthProvider(auth: IOpaqueAuthOptions): OpaqueAuthProvider
export function createAuthProvider(auth: IOAuthAuthOptions): OAuthAuthProvider
export function createAuthProvider(auth: IBlingAuthOptions): IAuthProvider

/**
 * Fábrica da estratégia de autenticação a partir de `auth.method`.
 *
 * @param auth Opções discriminadas de autenticação.
 *
 * @returns {IAuthProvider} Provedor concreto.
 */
export function createAuthProvider(auth: IBlingAuthOptions): IAuthProvider {
  switch (auth.method) {
    case 'jwt':
      return new JwtAuthProvider(auth)
    case 'opaque':
      return new OpaqueAuthProvider(auth)
    case 'oauth':
      return new OAuthAuthProvider(auth)
    default: {
      const exhaustive: never = auth
      throw new BlingInternalException(
        `Método de autenticação não suportado: ${String(exhaustive)}`
      )
    }
  }
}
