<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Error\ErrorResponse;
use AleBatistella\BlingErpApi\Exceptions\BlingApiException;
use AleBatistella\BlingErpApi\Exceptions\BlingInternalException;

/**
 * Dados da resposta de uma requisição.
 */
abstract class ResponseOptions
{
  /**
   * Constrói o objeto.
   *
   * @param ?Body $body
   * @param ?Headers $headers
   *
   * @return self
   */
  public function __construct(
    public readonly string $endpoint,
    public readonly string $method,
    public readonly int $status,
    public readonly ?Headers $headers = null,
    public readonly ?Body $body = null,
  ) {
    if ($status >= 400) {
      try {
        $errorResponse = ErrorResponse::fromResponse($this);
        throw new BlingApiException(rawResponse: $errorResponse, status: $status);
      } catch (\TypeError $e) {
        throw new BlingInternalException(
          message: "Não foi possível realizar a chamada HTTP: $method $endpoint",
          code: $status,
          previous: $e
        );
      }
    }
  }
}
