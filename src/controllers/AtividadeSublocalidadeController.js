const Controller = require('./Controller.js');
const AtividadeSublocalidadeServices = require('../services/AtividadeSublocalidadeServices.js');

const atividadeSublocalidadeServices = new AtividadeSublocalidadeServices();

class AtividadeSublocalidadeController extends Controller {
  constructor() {
    super(atividadeSublocalidadeServices);
  }
}

module.exports = AtividadeSublocalidadeController;
