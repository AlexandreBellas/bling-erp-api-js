<?php

namespace AleBatistella\BlingErpApi\Exceptions;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Error\ErrorResponse;

/**
 * Exceção lançada quando há um erro na chamada API ao Bling.
 */
class BlingApiException extends \Exception
{
  /** @property-read ErrorResponse $rawResponse A resposta da requisição. */
  private readonly ErrorResponse $rawResponse;

  /**
   * Constrói o objeto.
   *
   * @param ErrorResponse $rawResponse A resposta crua da requisição.
   */
  public function __construct(ErrorResponse $rawResponse)
  {
    $this->rawResponse = $rawResponse;

    parent::__construct($rawResponse->error->description);
  }

  /**
   * Obtém a resposta da requisição.
   */
  public function getResponse(): ErrorResponse
  {
    return $this->rawResponse;
  }
}
