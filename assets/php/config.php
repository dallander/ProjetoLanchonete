<?php 

    
    require_once __DIR__ . "/../../vendor/autoload.php";
    use Dotenv\Dotenv;
    $dotenv = Dotenv::createImmutable(__DIR__ . "/../../");
    $dotenv->load();
    $local_host = $_ENV["DB_LOCAL_HOST"];//ENDERÇO BANCO
    $dbname     = $_ENV["DB_NAME"];//NOME DO BANCO
    $user       = $_ENV["DB_USER"];//USUÁRIO DE ACESSO AO BANCO
    $pass       = $_ENV["DB_PASS"];//SENHA DE ACESSO AO BANCO
    $port       = $_ENV["DB_PORT"];//PORTA DE ACESSO AO BANCO 

     try {
        $pdo = new PDO("mysql:host=$local_host;port=$port; dbname=$dbname",$user, $pass);

        $stmtLanche = $pdo->prepare("SELECT * FROM lanches");
        $stmtLanche->execute();

        //RETORNA AS LINHAS DA TABELA lanche
        $valueTebalaLanche = $stmtLanche -> fetchAll(PDO::FETCH_ASSOC);
        

        //CONVERTE PARA STRIG NO FORMATO JSON
        header("Content-Type: application/json");
        echo json_encode($valueTebalaLanche);


     }catch (PDOException $e) {
        echo"Erro".$e->getMessage();
     }


?>