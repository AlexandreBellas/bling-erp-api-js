<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Dados da resposta de uma requisição.
 */
class ResponseOptions
{
  /**
   * Constrói o objeto.
   *
   * @param ?Body $body
   * @param ?Headers $headers
   */
  public function __construct(
    public int $status,
    public ?Headers $headers = [],
    public ?Body $body = null,
  ) {
  }
}
