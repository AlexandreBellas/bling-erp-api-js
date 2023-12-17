<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Parâmetros da requisição (para inserção como _query parameters_).
 */
abstract class RequestQueryParams
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int|\DateTimeInterface> $params
   */
  public function __construct(public array $params)
  {
  }
}
