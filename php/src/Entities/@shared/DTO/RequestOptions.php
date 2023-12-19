<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Opções para envio de uma requisição.
 */
class RequestOptions
{
  /**
   * Constrói o objeto.
   *
   * @param string $endpoint
   * @param ?RequestQueryParams $queryParams
   * @param ?RequestHeaders $headers
   * @param ?RequestBody $body
   */
  public function __construct(
    public string $endpoint,
    public ?RequestQueryParams $queryParams,
    public ?RequestHeaders $headers,
    public ?RequestBody $body,
  ) {
  }
}
