<?php

abstract class Product
{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $product_db;

    public function __construct($userInput)
    {
        $this->sku = $userInput->sku;
        $this->name = $userInput->name;
        $this->price = $userInput->price;
        $this->type = $userInput->type;
        $this->product_db = new Database();
    }

    public function insertToDatabase($attribute)
    {
        $stm = $this->product_db->queryFunction("INSERT INTO products(sku, name, price, type, attribute) VALUES (:sku, :name, :price, :type, :attribute)");
        $stm->bindValue(':sku', $this->sku);
        $stm->bindValue(':name', $this->name);
        $stm->bindValue(':price', $this->price);
        $stm->bindValue(':type', $this->type);
        $stm->bindValue(':attribute', $attribute);
        $stm->execute();
    }

    public static function getAllProducts()
    {
        $dbConn = new Database();
        $all_products = $dbConn->getAllItems('products');

        return $all_products;
    }

    public function getProductBySku($sku)
    {
        $product = $this->product_db->getSingleItem("SELECT * FROM products WHERE SKU = $sku");

        return $product;
    }

    public static function deleteProducts($skus)
    {
        $dbConn = new Database();
        for ($i = 0; $i < count($skus); $i++) {
            $skuu = $skus[$i];
            $dbConn->queryFunction("DELETE FROM products WHERE sku = :skuu");
            $dbConn->bind(':skuu', $skuu);
            $dbConn->execute();
        }
    }
}