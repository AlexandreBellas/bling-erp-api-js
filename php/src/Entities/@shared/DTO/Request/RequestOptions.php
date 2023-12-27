<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Dados para envio de uma requisição.
 */
class RequestOptions
{
  /**
   * Constrói o objeto.
   *
   * @param string $endpoint
   * @param ?QueryParams $queryParams
   * @param ?Headers $headers
   * @param ?Body $body
   */
  public function __construct(
    public string $endpoint,
    public ?QueryParams $queryParams = null,
    public ?Headers $headers = null,
    public ?Body $body = null,
  ) {
  }
}
