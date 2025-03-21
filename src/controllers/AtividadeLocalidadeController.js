const Controller = require('./Controller.js');
const AtividadeLocalidadeServices = require('../services/AtividadeLocalidadeServices.js');

const atividadeLocalidadeServices = new AtividadeLocalidadeServices();

class AtividadeLocalidadeController extends Controller {
  constructor() {
    super(atividadeLocalidadeServices);
  }
}

module.exports = AtividadeLocalidadeController;
