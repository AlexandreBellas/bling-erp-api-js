<?php

namespace Tests\Unit\AleBatistella\BlingErpApi;

use AleBatistella\BlingErpApi\Bling;
use AleBatistella\BlingErpApi\Entities\Borderos\Borderos;
use PHPUnit\Framework\TestCase;

/**
 * Teste de `Bling`.
 */
class BlingTest extends TestCase
{
  /**
   * Retorna uma nova instância do módulo conector.
   *
   * @return Bling
   */
  private function getInstance(): Bling
  {
    return new Bling(fake()->word());
  }

  /**
   * Testa a instanciação do módulo.
   *
   * @return void
   */
  public function testShouldInstantiateCorrectly(): void
  {
    $expected = Bling::class;

    $actual = $this->getInstance();

    $this->assertInstanceOf($expected, $actual);
  }

  /**
   * Testa obter a entidade Borderos.
   *
   * @return void
   */
  public function testShouldGetBorderosCorrectly(): void
  {
    $expected = Borderos::class;

    $actual = $this->getInstance()->borderos;

    $this->assertInstanceOf($expected, $actual);
  }
}
