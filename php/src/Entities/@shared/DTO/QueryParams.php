<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Parâmetros da requisição (para inserção como _query parameters_).
 */
abstract class QueryParams
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
