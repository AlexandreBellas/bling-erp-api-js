<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * _Headers_ da requisição.
 */
class RequestHeaders
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int> $content
   */
  public function __construct(public array $content)
  {
  }
}
