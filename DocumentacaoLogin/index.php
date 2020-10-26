<?php
error_reporting(E_ERROR | E_PARSE);

/**
* Cria uma instância do controlador para uso
*/
include_once('app/controladores/Login.php');
$controller = new LoginController();

/**
* ???? O que este trecho faz ????
*/
switch ($_GET['acao']) {
    case 'cadastrar':
        $controller->cadastrar();
        break;
    case 'info':
        $controller->info();
        break;
    case 'sair':
        $controller->sair();
        break;
    default:
        $controller->login();
}
