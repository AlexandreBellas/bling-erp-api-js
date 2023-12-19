<?php

namespace AleBatistella\BlingErpApi\Repositories;

use AleBatistella\BlingErpApi\Entities\Shared\DTO\RequestBody;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\RequestHeaders;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\RequestOptions;
use AleBatistella\BlingErpApi\Entities\Shared\DTO\ResponseOptions;
use GuzzleHttp\Client;

/**
 * Repositório de chamada de API do Bling utilizando `GuzzleHttp`.
 */
class BlingRepository implements IBlingRepository
{
  /** @property Client $client Cliente de chamada HTTP. */
  private readonly Client $client;

  /**
   * Cria o objeto.
   *
   * @param string $baseUrl
   * @param string $accessToken
   */
  public function __construct(string $baseUrl, string $accessToken)
  {
    $this->client = new Client([
      'base_uri' => $baseUrl,
      'headers'  => [
        'Authorization' => "Bearer $accessToken",
      ],
    ]);
  }

  /**
   * @inheritDoc
   */
  public function index(RequestOptions $options): ResponseOptions
  {
    $response = $this->client->get($options->endpoint, [
      'query'   => $options->queryParams?->content,
      'headers' => $options->headers?->content,
    ]);

    $rawResponseBody = $response->getBody()->getContents();

    return new ResponseOptions(
      body: new RequestBody(json_decode($rawResponseBody, true)),
      headers: new RequestHeaders($response->getHeaders())
    );
  }

  /**
   * @inheritDoc
   */
  public function show(RequestOptions $options): ResponseOptions
  {
    return $this->index($options);
  }

  /**
   * @inheritDoc
   */
  public function store(RequestOptions $options): ResponseOptions
  {
    $response = $this->client->post($options->endpoint, [
      'query'   => $options->queryParams?->content,
      'json'    => $options->body?->content,
      'headers' => $options->headers?->content,
    ]);

    $rawResponseBody = $response->getBody()->getContents();

    return new ResponseOptions(
      body: new RequestBody(json_decode($rawResponseBody, true)),
      headers: new RequestHeaders($response->getHeaders())
    );
  }

  /**
   * @inheritDoc
   */
  public function update(RequestOptions $options): ResponseOptions
  {
    $response = $this->client->patch($options->endpoint, [
      'query'   => $options->queryParams?->content,
      'json'    => $options->body?->content,
      'headers' => $options->headers?->content,
    ]);

    $rawResponseBody = $response->getBody()->getContents();

    return new ResponseOptions(
      body: new RequestBody(json_decode($rawResponseBody, true)),
      headers: new RequestHeaders($response->getHeaders())
    );
  }

  /**
   * @inheritDoc
   */
  public function replace(RequestOptions $options): ResponseOptions
  {
    $response = $this->client->put($options->endpoint, [
      'query'   => $options->queryParams?->content,
      'json'    => $options->body?->content,
      'headers' => $options->headers?->content,
    ]);

    $rawResponseBody = $response->getBody()->getContents();

    return new ResponseOptions(
      body: new RequestBody(json_decode($rawResponseBody, true)),
      headers: new RequestHeaders($response->getHeaders())
    );
  }

  /**
   * @inheritDoc
   */
  public function destroy(RequestOptions $options): ResponseOptions
  {
    $response = $this->client->delete($options->endpoint, [
      'query'   => $options->queryParams?->content,
      'json'    => $options->body?->content,
      'headers' => $options->headers?->content,
    ]);

    $rawResponseBody = $response->getBody()->getContents();

    return new ResponseOptions(
      body: new RequestBody(json_decode($rawResponseBody, true)),
      headers: new RequestHeaders($response->getHeaders())
    );
  }
}
