<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Opções para envio de uma requisição.
 */
abstract class RequestOptions
{
  /**
   * Constrói o objeto.
   *
   * @param string $endpoint
   * @param ?RequestPathParams $pathParams
   * @param ?RequestQueryParams $queryParams
   * @param ?RequestHeaders $headers
   * @param ?RequestBody $body
   */
  public function __construct(
    protected string $endpoint,
    protected ?RequestPathParams $pathParams,
    protected ?RequestQueryParams $queryParams,
    protected ?RequestHeaders $headers,
    protected ?RequestBody $body,
  ) {
  }
}
