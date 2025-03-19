const express = require('express');
const pessoas = require('./pessoasRoute.js');
const localidades = require('./localidadesRoute.js');
const departamentos = require('./departamentosRoute.js');
const professores = require('./professoresRoute.js')

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    localidades,
    departamentos,
    professores
  );
};