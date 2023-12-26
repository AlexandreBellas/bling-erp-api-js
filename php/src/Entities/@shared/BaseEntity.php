<?php

namespace AleBatistella\BlingErpApi\Entities\Shared;

use AleBatistella\BlingErpApi\Repositories\IBlingRepository;

/**
 * Entidade base para o projeto.
 */
abstract class BaseEntity
{
  /**
   * Constrói o objeto.
   *
   * @param IBlingRepository $repository Repositório para conexão com o Bling.
   */
  public function __construct(protected IBlingRepository $repository)
  {
  }

  /**
   * Prepara um parâmetro de data para chamada do repositório.
   *
   * @param \DateTimeInterface|string|null $param Parâmetro do tipo `string`, `\DateTimeInterface` ou `null`
   *
   * @return string|null
   */
  protected function prepareStringOrDateParam(\DateTimeInterface|string|null $param): string|null
  {
    if (is_null($param)) {
      return null;
    }

    if (gettype($param) === 'string') {
      return $param;
    }

    return convertDateToString($param);
  }
}
