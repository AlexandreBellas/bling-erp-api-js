<?php

namespace Tests\Unit\AleBatistella\BlingErpApi\Entities\Shared\DTO\Request;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\Body;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;
use AleBatistella\BlingErpApi\Exceptions\BlingApiException;
use AleBatistella\BlingErpApi\Exceptions\BlingInternalException;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\TestStatus\Notice;
use PHPUnit\Framework\TestStatus\Warning;

/**
 * Teste de `ResponseOptions`.
 */
class ResponseOptionsTest extends TestCase
{
  /**
   * Testa a instanciação para _status_ HTTP bem sucedido.
   *
   * @return void
   */
  public function testShouldInstantiateWithNormalConditions(): void
  {
    $expected = ResponseOptions::class;

    $actual = new class (endpoint: fake()->word(),
      method: fake()->word(),
      status: 200
    ) extends ResponseOptions {
    };

    $this->assertInstanceOf($expected, $actual);
  }

  /**
   * Testa o lançamento de erro para requisição mal-sucedida e corpo esperado.
   *
   * @return void
   */
  public function testShouldInstantiateWithErrorAndExpectedBody(): void
  {
    $this->expectException(BlingApiException::class);
    $this->expectExceptionMessage("A venda não pode ser salva, pois ocorreram problemas em sua validação.");
    $rawResponse = '{
      "error": {
        "type": "VALIDATION_ERROR",
        "message": "Não foi possível salvar a venda",
        "description": "A venda não pode ser salva, pois ocorreram problemas em sua validação.",
        "fields": [
          {
            "code": 49,
            "msg": "Uma ou mais parcelas da venda possuem erros de validação",
            "element": "parcelas",
            "namespace": "VENDAS",
            "collection": [
              {
                "index": 1,
                "code": 12,
                "msg": "Id da forma de pagamento inválido.",
                "element": "formaPagamento",
                "namespace": "VENDAS"
              }
            ]
          }
        ]
      }
    }';
    $rawResponseArray = json_decode($rawResponse, true);

    new class (endpoint: fake()->word(),
      method: fake()->word(),
      status: 400,
      body: new class ($rawResponseArray) extends Body { }
    ) extends ResponseOptions {
    };
  }

  /**
   * Testa o lançamento de erro para requisição mal-sucedida e corpo inesperado.
   *
   * @return void
   */
  public function testShouldInstantiateWithErrorAndNotExpectedBody(): void
  {
    $endpoint = fake()->word();
    $method = fake()->word();
    $this->expectException(BlingInternalException::class);
    $this->expectExceptionMessage("Não foi possível realizar a chamada HTTP: $method $endpoint");

    new class (endpoint: $endpoint,
      method: $method,
      status: 400,
      body: new class (['teste' => '123']) extends Body { }
    ) extends ResponseOptions {
    };
  }
}
