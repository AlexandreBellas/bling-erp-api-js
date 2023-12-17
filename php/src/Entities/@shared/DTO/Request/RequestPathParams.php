<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Parâmetros da requisição (para inserção como _path parameters_).
 */
abstract class RequestPathParams
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int> $params
   */
  public function __construct(public array $params)
  {
  }
}
