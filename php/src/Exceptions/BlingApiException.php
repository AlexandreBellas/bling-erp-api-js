<?php

namespace AleBatistella\BlingErpApi\Exceptions;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Error\ErrorResponse;

/**
 * Exceção lançada quando há um erro na chamada API ao Bling.
 */
class BlingApiException extends \Exception
{
  /**
   * Constrói o objeto.
   *
   * @param ErrorResponse $rawResponse A resposta crua da requisição.
   * @param int $status O _status_ HTTP da resposta.
   */
  public function __construct(
    private ErrorResponse $rawResponse,
    private int $status
  ) {
    parent::__construct($rawResponse->error->description, $status);
  }

  /**
   * Obtém a resposta da requisição.
   */
  public function getResponse(): ErrorResponse
  {
    return $this->rawResponse;
  }

  /**
   * Obtém o _status_ HTTP.
   *
   * @return int
   */
  public function getHttpStatus(): int
  {
    return $this->status;
  }
}
