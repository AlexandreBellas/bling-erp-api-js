<?php

namespace AleBatistella\BlingErpApi\Contracts;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;

/**
 * Objeto raiz de resposta.
 */
interface IResponseRootObject extends IResponseObject
{
  /**
   * Constrói a partir de uma resposta de requisição.
   */
  public static function fromResponse(ResponseOptions $response): static;
}
