<?php

if (!function_exists('convertDateToString')) {
  /**
   * Converte uma data para o formato YYYY-MM-DD.
   *
   * @param \DateTimeInterface $date
   *
   * @return string
   */
  function convertDateToString(\DateTimeInterface $date): string
  {
    return $date->format('Y-m-d');
  }
}

if (!function_exists('fake')) {
  /**
   * Cria objeto para dados _fake_.
   *
   * @return \Faker\Generator
   */
  function fake(): \Faker\Generator
  {
    return \Faker\Factory::create();
  }
}
