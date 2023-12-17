<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * _Headers_ da requisição.
 */
abstract class RequestHeaders
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int> $headers
   */
  public function __construct(public array $headers)
  {
  }
}
