<?php

namespace AleBatistella\BlingErpApi\Entities\Shared\DTO;

/**
 * Corpo da requisição.
 */
class RequestBody
{
  /**
   * Constrói o objeto.
   *
   * @param array $content
   */
  public function __construct(public array $content)
  {
  }
}
