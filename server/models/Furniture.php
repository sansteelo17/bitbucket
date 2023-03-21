<?php

class Furniture extends Product
{
    protected $attribute;

    public function __construct($userInput)
    {
        parent::__construct($userInput);

        $this->attribute = $userInput->height . "x" . $userInput->width . "x" . $userInput->length;
    }

    public function insertToDatabase($attribute)
    {
        parent::insertToDatabase($this->attribute);
    }
}
