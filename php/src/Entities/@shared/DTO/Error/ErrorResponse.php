<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

/**
 * Objeto representativo da resposta da requisição com erro.
 */
class ErrorResponse
{
  /**
   * Constrói o objeto.
   *
   * @param Error $error
   */
  public function __construct(public Error $error)
  {
  }
}
