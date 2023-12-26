<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;

/**
 * Objeto de erro da requisição.
 */
readonly final class Error implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param string $type
   * @param string $message
   * @param string $description
   * @param ?ErrorField[] $fields
   */
  private function __construct(
    public string $type,
    public string $message,
    public string $description,
    public ?array $fields = []
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      type: $attributes['type'],
      message: $attributes['message'],
      description: $attributes['description'],
      fields: array_key_exists('fields', $attributes) ? array_map(
        fn(array $item): ErrorField => ErrorField::from($item),
        $attributes['fields']
      ) : null,
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'type'        => $this->type,
      'message'     => $this->message,
      'description' => $this->description,
      'fields'      => array_map(
        static fn(ErrorField $response): array      => $response->toArray(),
        $this->fields
      ),
    ];
  }
}
