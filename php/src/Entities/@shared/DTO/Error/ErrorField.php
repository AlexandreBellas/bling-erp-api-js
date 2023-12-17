<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

/**
 * Objeto de erro para um campo da requisição.
 */
class ErrorField
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
  public function __construct(
    public int $code,
    public string $msg,
    public ?string $element = null,
    public ?string $namespace = null,
    public ?array $collection = []
  ) {
  }
}
