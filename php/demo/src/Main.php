<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AleBatistella\BlingErpApi\Bling;

$apiKey = '';
$bling = new Bling($apiKey);

$bling->borderos->delete(123);
