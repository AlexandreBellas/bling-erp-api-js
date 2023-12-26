<?php

namespace Tests\Unit\AleBatistella\BlingErpApi\Entities\Borderos;

use AleBatistella\BlingErpApi\Entities\Borderos\Borderos;
use AleBatistella\BlingErpApi\Entities\Borderos\Schema\Find\FindResponse;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\RequestOptions;
use AleBatistella\BlingErpApi\Entities\Shared\TestResponseTrait;
use AleBatistella\BlingErpApi\Repositories\IBlingRepository;
use PHPUnit\Framework\TestCase;

/**
 * Teste de `Borderos`.
 */
class BorderosTest extends TestCase
{
  use TestResponseTrait;

  /**
   * Obtém a instância da entidade.
   *
   * @param IBlingRepository $repository
   *
   * @return Borderos
   */
  private function getInstance(IBlingRepository $repository): Borderos
  {
    return new Borderos($repository);
  }

  /**
   * Testa a deleção.
   *
   * @return void
   */
  public function testShouldDeleteSuccessfully(): void
  {
    $idBordero = fake()->randomNumber();
    $repository = $this->getMockBuilder(IBlingRepository::class)->getMock();
    $repository->expects($this->once())
      ->method('destroy')
      ->with($this->callback(fn(RequestOptions $requestOptions) =>
        $requestOptions->endpoint === "borderos/$idBordero"
      ))
      ->willReturn($this->buildResponse(status: 200, body: null));

    /** @var IBlingRepository $repository */
    $response = $this->getInstance($repository)->delete($idBordero);

    $this->assertNull($response);
  }

  /**
   * Testa a busca pontual.
   *
   * @return void
   */
  public function testShouldFindSuccessfully(): void
  {
    $idBordero = fake()->randomNumber();
    $findResponse = json_decode(file_get_contents(__DIR__ . '/find/response.json'), true);
    $repository = $this->getMockBuilder(IBlingRepository::class)->getMock();
    $repository->expects($this->once())
      ->method('show')
      ->with($this->callback(fn(RequestOptions $requestOptions) =>
        $requestOptions->endpoint === "borderos/$idBordero"
      ))
      ->willReturn($this->buildResponse(status: 200, body: $this->buildBody($findResponse)));

    /** @var IBlingRepository $repository */
    $response = $this->getInstance($repository)->find($idBordero);

    $this->assertInstanceOf(FindResponse::class, $response);
    $this->assertEquals($findResponse, $response->toArray());
  }
}
