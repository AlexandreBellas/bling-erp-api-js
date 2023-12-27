<?php

namespace AleBatistella\BlingErpApi;

use AleBatistella\BlingErpApi\Entities\Borderos\Borderos;
use AleBatistella\BlingErpApi\Entities\Shared\BaseEntity;
use AleBatistella\BlingErpApi\Exceptions\BlingInternalException;
use AleBatistella\BlingErpApi\Providers\IoC;
use AleBatistella\BlingErpApi\Repositories\IBlingRepository;

/**
 * Módulo conector à API do Bling.
 *
 * @property Borderos $borderos
 */
class Bling
{
  /** @property-read IBlingRepository $repository Repositório de conexão ao Bling. */
  private readonly IBlingRepository $repository;

  /** @property array $modules Módulos instanciados para utilização. */
  private array $modules;

  /**
   * Constrói o objeto.
   *
   * @param string $accessToken
   */
  public function __construct(string $accessToken)
  {
    $this->repository = IoC::getRepository($accessToken);
    $this->modules = [];
  }

  /**
   * Obtém um módulo através de sua assinatura (seguindo o _pattern_ `Instance`).
   *
   * @param string $entityClassName O nome da classe da entidade desejada.
   *
   * @return BaseEntity A instância da entidade.
   */
  private function getModule(string $entityClassName): BaseEntity
  {
    if (!array_key_exists($entityClassName, $this->modules)) {
      $this->modules[$entityClassName] = new $entityClassName($this->repository);
    }

    return $this->modules[$entityClassName];
  }

  /**
   * _Facade_ de busca da entidade correta.
   */
  public function __get(string $name)
  {
    return match ($name) {
      'borderos' => $this->getModule(Borderos::class),
      default => throw new BlingInternalException("A entidade \"$name\" não existe.")
    };
  }
}
