<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Objeto representativo de todas os dados de resposta da requisição.
 */
class ResponseOptions
{
  /**
   * Constrói o objeto.
   *
   * @param ?RequestBody $body
   * @param ?RequestHeaders $headers
   */
  public function __construct(
    public ?RequestBody $body = null,
    public ?RequestHeaders $headers = [],
  ) {
  }
}
