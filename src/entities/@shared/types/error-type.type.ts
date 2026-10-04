/**
 * Tipo do erro retornado pela API.
 *
 * - `BAD_REQUEST`: requisição inválida
 * - `VALIDATION_ERROR`: erro de validação
 * - `MISSING_REQUIRED_FIELD_ERROR`: campo obrigatório ausente
 * - `EMPTY_REQUEST_BODY`: corpo vazio
 * - `INVALID_REQUEST_BODY`: corpo inválido
 * - `INVALID_APIKEY_ERROR`: chave de API inválida
 * - `UNAUTHORIZED`: não autorizado
 * - `UNAUTHENTICATED`: não autenticado
 * - `FORBIDDEN`: acesso negado
 * - `RESOURCE_NOT_FOUND`: recurso não encontrado
 * - `METHOD_NOT_ALLOWED`: método não permitido
 * - `TOO_MANY_REQUESTS`: limite de requisições
 * - `UNKNOWN_ERROR`: erro desconhecido
 * - `SERVER_ERROR`: erro interno
 * - `NOT_IMPLEMENTED`: não implementado
 */
type IErrorType =
  | 'BAD_REQUEST'
  | 'VALIDATION_ERROR'
  | 'MISSING_REQUIRED_FIELD_ERROR'
  | 'EMPTY_REQUEST_BODY'
  | 'INVALID_REQUEST_BODY'
  | 'INVALID_APIKEY_ERROR'
  | 'UNAUTHORIZED'
  | 'UNAUTHENTICATED'
  | 'FORBIDDEN'
  | 'RESOURCE_NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'TOO_MANY_REQUESTS'
  | 'UNKNOWN_ERROR'
  | 'SERVER_ERROR'
  | 'NOT_IMPLEMENTED'

export default IErrorType
