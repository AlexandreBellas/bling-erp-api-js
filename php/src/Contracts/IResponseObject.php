<?php

namespace AleBatistella\BlingErpApi\Contracts;

/**
 * Objeto de resposta.
 */
interface IResponseObject
{
  /**
   * Constrói o objeto a partir da resposta em formato _array_.
   *
   * @param array $attributes
   *
   * @return self
   */
  public static function from(array $attributes): static;

  /**
   * Converte o objeto em _array_.
   *
   * @return array
   */
  public function toArray(): array;
}
