<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Schema;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;

/**
 * Objeto com ID.
 */
final class Id implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param int $id
   */
  public function __construct(public readonly int $id)
  {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      id: $attributes['id']
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'id' => $this->id,
    ];
  }
}
