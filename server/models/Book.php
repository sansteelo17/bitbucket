<?php


class Book extends Product
{
    protected $attribute;

    public function __construct($userInput)
    {
        parent::__construct($userInput);

        $this->attribute = $userInput->weight . "KG";
    }

    public function insertToDatabase($attribute)
    {
        parent::insertToDatabase($this->attribute);
    }
}