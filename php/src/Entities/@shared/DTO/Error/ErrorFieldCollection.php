<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;

/**
 * Item da coleção de erros para um campo da requisição.
 */
readonly final class ErrorFieldCollection implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param int $index
   * @param int $code
   * @param string $msg
   * @param ?string $element
   * @param ?string $namespace
   */
  private function __construct(
    public int $index,
    public int $code,
    public string $msg,
    public ?string $element = null,
    public ?string $namespace = null,
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      index: $attributes['index'],
      code: $attributes['code'],
      msg: $attributes['msg'],
      element: $attributes['element'],
      namespace: $attributes['namespace'],
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'index'     => $this->index,
      'code'      => $this->code,
      'msg'       => $this->msg,
      'element'   => $this->element,
      'namespace' => $this->namespace,
    ];
  }
}
