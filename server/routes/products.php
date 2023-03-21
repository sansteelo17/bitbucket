<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('../core/autoload.php');

$products = Product::getAllProducts();

echo json_encode(['allProducts' => $products]);
