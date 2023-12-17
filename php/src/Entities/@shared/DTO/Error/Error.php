<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

/**
 * Objeto de erro da requisição.
 */
class Error
{
  /**
   * Constrói o objeto.
   *
   * @param string $type
   * @param string $message
   * @param string $description
   * @param ?ErrorField[] $fields
   */
  public function __construct(
    public string $type,
    public string $message,
    public string $description,
    public ?array $fields = []
  ) {
  }
}
