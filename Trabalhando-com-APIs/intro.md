# Trabalhando com APIs

* A API troca informações entre os sistemas, servidores etc. Por exemplo, ao logar em um site com o seu usuário do google são disponibilizadas informações (APIs) para que uma conexão seja feita. Sendo assim, ela vai estruturar todas as informações da web.

* A API não trata as informações; somente faz a ponte entre o back-end e o front-end.

## JSON

* É um formato de arquivo legível de escrever os dados sendo universal porque é usado todas as linguagens. Ver arquivo "exemplo.json"

* Métodos HTTP

## GET
Fornece informações

## POST
Recebe informações que devem ou não ser registradas

## DELETE
Informações que devem ser apagadas

## PUT
Atualiza/faz update de registros

## PATCH
Só aceita atualizações em um único registro


# Como inicializar um projeto em NodeJS

1. npm init -y 
2. npm i express
3. cria o server:
    * const express = require('express')
    * const app = express()
    * app.listen('3000')
    * roda o index.js