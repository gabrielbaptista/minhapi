// biblioteca js que faz o mapeamento das pastas em função do server.js
require("rootpath")(); 
const express = require('express');
const cors = require("cors");

const api = express()
var apiPort = process.env.PORT || 3000;
var ambiente = process.env.NODE_ENV || 'development';

// separação da api
// uso do JWT para garantir a segurança da API e o uso de json no body para transferir dados de uma camada para a outra 
api.use(express.urlencoded());
api.use(express.json());

// Definição do CORS para permitir acesso externo
// Isso tem que acontecer antes da criação das rotas
if (ambiente === 'development'){
    api.use(cors());
}

api.use('/api/about', require('./controllers/about.controller'));

// start server API
var serverAPI = api.listen(apiPort, function () {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});