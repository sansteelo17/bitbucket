<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('../core/autoload.php');

$prodType = [
    "book" => 'Book',
    "dvd" => 'Dvd',
    "furniture" => 'Furniture'
];

$data = file_get_contents('php://input');
$result =  json_decode($data);
$product = new $prodType[$result->type]($result);
$product->insertToDatabase($result->attribute);
