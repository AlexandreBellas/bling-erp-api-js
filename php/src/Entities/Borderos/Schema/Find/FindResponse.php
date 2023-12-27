<?php

namespace AleBatistella\BlingErpApi\Entities\Borderos\Schema\Find;

use AleBatistella\BlingErpApi\Contracts\IResponseRootObject;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\Request\ResponseOptions;

/**
 * Resposta da busca de borderôs.
 */
readonly final class FindResponse implements IResponseRootObject
{
  /**
   * Constrói o objeto.
   *
   * @param FindResponseData $data
   */
  public function __construct(
    public FindResponseData $data
  ) {
  }

  /**
   * @inheritDoc
   */
  public static function fromResponse(ResponseOptions $response): static
  {
    return self::from($response->body->content);
  }

  /**
   * @inheritDoc
   */
  public static function from(array $attributes): static
  {
    return new self(
      data: FindResponseData::from($attributes['data'])
    );
  }

  /**
   * @inheritDoc
   */
  public function toArray(): array
  {
    return [
      'data' => $this->data->toArray(),
    ];
  }
}
