<?php

namespace AleBatistella\BlingErpApi\Repositories;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\RequestOptions;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;

interface IBlingRepository
{
  /**
   * Realiza uma chamada GET **sem** a identificação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function index(RequestOptions $options): ResponseOptions;

  /**
   * Realiza uma chamada GET **com** a identificação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function show(RequestOptions $options): ResponseOptions;

  /**
   * Realiza uma chamada POST para criação de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function store(RequestOptions $options): ResponseOptions;

  /**
   * Realiza uma chamada PATCH para a atualização de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function update(RequestOptions $options): ResponseOptions;

  /**
   * Realiza uma chamada PUT para a atualização de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function replace(RequestOptions $options): ResponseOptions;

  /**
   * Realiza uma chamada DELETE para deleção de um recurso.
   *
   * @param RequestOptions $options Opções da chamada de API.
   *
   * @return ResponseOptions
   */
  public function destroy(RequestOptions $options): ResponseOptions;
}
