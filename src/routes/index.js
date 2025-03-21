const express = require('express');
const pessoas = require('./pessoasRoute.js');
const localidades = require('./localidadesRoute.js');
const departamentos = require('./departamentosRoute.js');
const professores = require('./professoresRoute.js');
const monitores = require('./monitoresRoute.js');
const organizadores = require('./organizadoresRoute.js');
const atividadeSublocalidades = require('./atividadeSublocalidadesRoute.js');
const sublocalidades = require('./sublocalidadesRoute.js');
const atividadeLocalidades = require('./atividadeLocalidadesRoute.js');
const feiras = require('./feirasRoute.js');
const agendamentoFeiras = require('./agendamentoFeirasRoute.js');
const monitorAtividades = require('./monitorAtividadesRoute.js');
const agendamentoAtividadeFeiras = require('./agendamentoAtividadeFeirasRoute.js');



module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    localidades,
    departamentos,
    professores,
    monitores,
    organizadores,
    atividadeSublocalidades,
    sublocalidades,
    atividadeLocalidades,
    feiras,
    agendamentoFeiras,
    monitorAtividades,
    agendamentoAtividadeFeiras
  );
};