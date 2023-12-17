<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

/**
 * Corpo da requisição.
 */
abstract class RequestBody
{
  /**
   * Constrói o objeto.
   *
   * @param object $body
   */
  public function __construct(public object $body)
  {
  }
}
