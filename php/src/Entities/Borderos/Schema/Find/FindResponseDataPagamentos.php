<?php

namespace AleBatistella\BlingErpApi\Entities\Borderos\Schema\Find;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Schema\Id;

/**
 * @internal
 */
readonly final class FindResponseDataPagamentos implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param Id $contato
   * @param string $numeroDocumento
   * @param float $valorPago
   * @param float $juros
   * @param float $desconto
   * @param float $acrescimo
   * @param float $tarifa
   */
  public function __construct(
    public Id $contato,
    public string $numeroDocumento,
    public float $valorPago,
    public float $juros,
    public float $desconto,
    public float $acrescimo,
    public float $tarifa,
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      contato: Id::from($attributes['contato']),
      numeroDocumento: $attributes['numeroDocumento'],
      valorPago: $attributes['valorPago'],
      juros: $attributes['juros'],
      desconto: $attributes['desconto'],
      acrescimo: $attributes['acrescimo'],
      tarifa: $attributes['tarifa'],
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'contato'         => $this->contato->toArray(),
      'numeroDocumento' => $this->numeroDocumento,
      'valorPago'       => $this->valorPago,
      'juros'           => $this->juros,
      'desconto'        => $this->desconto,
      'acrescimo'       => $this->acrescimo,
      'tarifa'          => $this->tarifa,
    ];
  }
}
