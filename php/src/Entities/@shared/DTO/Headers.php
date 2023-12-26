<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * _Headers_ da requisição.
 */
abstract class Headers
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int> $content
   */
  protected function __construct(protected array $content)
  {
  }

  /**
   * Transforma o conteúdo em _array_.
   *
   * @return array
   */
  public function toArray(): array
  {
    return isset($this->content) ? $this->content : [];
  }
}
