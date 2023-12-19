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
