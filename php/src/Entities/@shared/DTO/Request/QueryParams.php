<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Parâmetros da requisição (para inserção como _query parameters_).
 */
readonly class QueryParams
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
