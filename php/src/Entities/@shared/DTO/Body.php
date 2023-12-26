<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Corpo da requisição.
 */
abstract class Body
{
  /**
   * Constrói o objeto.
   *
   * @param array<string, string|int|\DateTimeInterface> $content
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
