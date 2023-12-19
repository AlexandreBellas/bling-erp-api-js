<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Parâmetros da requisição (para inserção como _query parameters_).
 */
class RequestQueryParams
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int|\DateTimeInterface> $content
   */
  public function __construct(public array $content)
  {
  }
}
