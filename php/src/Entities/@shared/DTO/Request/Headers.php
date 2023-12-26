<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * _Headers_ da requisição.
 */
readonly class Headers
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
