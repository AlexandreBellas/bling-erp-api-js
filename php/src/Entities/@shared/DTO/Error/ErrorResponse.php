<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

use AleBatistella\BlingErpApi\Contracts\IResponseRootObject;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;

/**
 * Objeto representativo da resposta da requisição com erro.
 */
readonly final class ErrorResponse implements IResponseRootObject
{
  /**
   * Constrói o objeto.
   *
   * @param Error $error
   */
  private function __construct(public Error $error)
  {
  }

  /**
   * @inheritDoc
   */
  public static function fromResponse(ResponseOptions $response): static
  {
    return self::from($response->body->content);
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      error: Error::from($attributes['error'])
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'error' => $this->error->toArray(),
    ];
  }
}
