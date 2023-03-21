<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once('../core/autoload.php');

$json = file_get_contents('php://input');
$result = json_decode($json);

Product::deleteProducts($result);
