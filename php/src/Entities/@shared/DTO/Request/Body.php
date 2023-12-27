<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Corpo da requisição.
 */
class Body
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int|\DateTimeInterface> $content
   *
   * @return self
   */
  public function __construct(public readonly array $content)
  {
  }
}
