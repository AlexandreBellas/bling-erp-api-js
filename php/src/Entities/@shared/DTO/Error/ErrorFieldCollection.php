<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

/**
 * Item da coleção de erros para um campo da requisição.
 */
class ErrorFieldCollection
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
  public function __construct(
    public int $index,
    public int $code,
    public string $msg,
    public ?string $element = null,
    public ?string $namespace = null,
  ) {
  }
}
