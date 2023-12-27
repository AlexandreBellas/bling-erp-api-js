<?php

namespace AleBatistella\BlingErpApi\Entities\Borderos\Schema\Find;

use AleBatistella\BlingErpApi\Contracts\IResponseObject;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Schema\Id;

/**
 * Dados de resposta da busca de borderôs.
 */
readonly final class FindResponseData implements IResponseObject
{
  /**
   * Constrói o objeto.
   *
   * @param int $id
   * @param string $data
   * @param string $historico
   * @param Id $portador
   * @param Id $categoria
   * @param FindResponseDataPagamentos[] $pagamentos
   */
  public function __construct(
    public int $id,
    public string $data,
    public string $historico,
    public Id $portador,
    public Id $categoria,
    public array $pagamentos
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      id: $attributes['id'],
      data: $attributes['data'],
      historico: $attributes['historico'],
      portador: Id::from($attributes['portador']),
      categoria: Id::from($attributes['categoria']),
      pagamentos: array_map(
        fn(array $item): FindResponseDataPagamentos => FindResponseDataPagamentos::from($item),
        $attributes['pagamentos']
      ),
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'id'         => $this->id,
      'data'       => $this->data,
      'historico'  => $this->historico,
      'portador'   => $this->portador->toArray(),
      'categoria'  => $this->categoria->toArray(),
      'pagamentos' => array_map(
        static fn(FindResponseDataPagamentos $response): array => $response->toArray(),
        $this->pagamentos
      ),
    ];
  }
}
