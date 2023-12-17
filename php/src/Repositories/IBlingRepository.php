<?php

namespace AleBatistella\BlingErpApi\Repositories;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\RequestOptions;

interface IBlingRepository
{
  /**
   * Realiza uma chamada GET **sem** a identificação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function index(RequestOptions $options);

  /**
   * Realiza uma chamada GET **com** a identificação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function show(RequestOptions $options);

  /**
   * Realiza uma chamada POST para criação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function store(RequestOptions $options);

  /**
   * Realiza uma chamada PATCH para a atualização de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function update(RequestOptions $options);

  /**
   * Realiza uma chamada PUT para a atualização de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function replace(RequestOptions $options);

  /**
   * Realiza uma chamada DELETE para deleção de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   */
  public function destroy(RequestOptions $options);
}
