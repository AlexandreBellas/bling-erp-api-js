<?php

namespace AleBatistella\BlingErpApi\Entities\Borderos;

use AleBatistella\BlingErpApi\Entities\Shared\BaseEntity;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\RequestOptions;

/**
 * Entidade para interação com borderôs.
 *
 * @see https://developer.bling.com.br/referencia#/Border%C3%B4s
 */
class Borderos extends BaseEntity
{
  /**
   * Remove um borderô.
   *
   * @param int $idBordero ID para deleção.
   *
   * @return null Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/delete_borderos__idBordero_
   */
  public function delete(int $idBordero): null
  {
    return $this->repository->destroy(new RequestOptions(
      endpoint: "borderos/$idBordero"
    ));
  }

  /**
   * Encontra um borderô.
   *
   * @param params Parâmetros para a busca (somente o ID).
   *
   * @return {Promise<IFindSuccessResponse>} Os dados do borderô pesquisado.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/get_borderos__idBordero_
   */
  public function find(int $idBordero)
  {
    return $this->repository->show(new RequestOptions(
      endpoint: "borderos/$idBordero"
    ));
  }
}
