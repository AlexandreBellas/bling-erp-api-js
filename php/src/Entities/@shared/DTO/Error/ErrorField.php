<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;

/**
 * Objeto de erro para um campo da requisição.
 */
readonly final class ErrorField implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param int $code
   * @param string $msg
   * @param ?string $element
   * @param ?string $namespace
   * @param ?ErrorFieldCollection[] $collection
   */
  private function __construct(
    public int $code,
    public string $msg,
    public ?string $element = null,
    public ?string $namespace = null,
    public ?array $collection = []
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      code: $attributes['code'],
      msg: $attributes['msg'],
      element: $attributes['element'],
      namespace: $attributes['namespace'],
      collection: array_key_exists('collection', $attributes) ? array_map(
        fn(array $item): ErrorFieldCollection => ErrorFieldCollection::from($item),
        $attributes['collection']
      ) : null,
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'code'       => $this->code,
      'msg'        => $this->msg,
      'element'    => $this->element,
      'namespace'  => $this->namespace,
      'collection' => array_map(
        static fn(ErrorFieldCollection $response): array => $response->toArray(),
        $this->collection
      ),
    ];
  }
}
