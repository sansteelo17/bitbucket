<?php

class Dvd extends Product
{
    protected $attribute;

    public function __construct($userInput)
    {
        parent::__construct($userInput);

        $this->attribute = $userInput->size . "MB";
    }

    public function insertToDatabase($attribute)
    {
        parent::insertToDatabase($this->attribute);
    }
}