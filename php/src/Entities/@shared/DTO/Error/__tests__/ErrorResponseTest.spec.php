<?php

namespace Tests\Unit\AleBatistella\BlingErpApi\Entities\Shared\DTO\Error;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\Error\ErrorResponse;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\Body;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;
use PHPUnit\Framework\TestCase;

/**
 * Teste de `ErrorResponse`.
 */
class ErrorResponseTest extends TestCase
{
  /**
   * Testa a instanciação com dados esperados.
   *
   * @return void
   */
  public function testShouldInstantiateWithCorrectContent(): void
  {
    $expected = ErrorResponse::class;
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

    $actual = ErrorResponse::from($rawResponseArray);

    $this->assertInstanceOf($expected, $actual);
  }

  /**
   * Testa a instanciação a partir de um `ResponseOptions`.
   *
   * @return void
   */
  public function testShouldInstantiateFromResponseOptions(): void
  {
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
    $response = new class (endpoint: fake()->word(),
      method: fake()->word(),
      status: 200,
      body: new class ($rawResponseArray) extends Body { },
    ) extends ResponseOptions {
    };
    $expected = ErrorResponse::class;

    $actual = ErrorResponse::fromResponse($response);

    $this->assertInstanceOf($expected, $actual);
  }

  /**
   * Testa a formatação em _array_.
   *
   * @return void
   */
  public function testShouldConvertToArray(): void
  {
    $rawExpected = '{
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
    $expected = json_decode($rawExpected, true);

    $actual = ErrorResponse::from($expected);

    $this->assertEquals($expected, $actual->toArray());
  }
}
