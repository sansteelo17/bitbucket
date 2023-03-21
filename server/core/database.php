<?php

class Database
{
    protected $DBHOST = 'localhost';
    protected $DBUSER = 'root';
    protected $DBPASS = '';
    protected $DBNAME = 'bitbucket';
    protected $connection;
    protected $stmt;
    protected $query;

    public function __construct()
    {
        $sql = "mysql:host=$this->DBHOST;dbname=$this->DBNAME";

        if (!$this->connection = new PDO($sql, $this->DBUSER, $this->DBPASS)) {
            die('Failed to connect to database!');
        }
    }

    public function queryFunction($query)
    {
        $this->query = $query;

        $this->stmt = $this->connection->prepare($this->query);

        return $this->stmt;
    }

    public function execute()
    {
        return $this->stmt->execute();
    }

    public function getAllItems($table)
    {
        $this->stmt = $this->queryFunction("SELECT * FROM $table");

        if ($this->stmt) {
            $this->execute();
            $result = $this->stmt->fetchAll(PDO::FETCH_OBJ);
        }

        return $result;
    }

    public function getSingleItem($query)
    {
        $this->stmt  = $this->queryFunction($query);

        if ($this->stmt) {
            $this->execute();
            $result = $this->stmt->fetch(PDO::FETCH_OBJ);
        }

        return $result;
    }

    public function bind($params, $value)
    {
        return $this->stmt->bindValue($params, $value);
    }
}