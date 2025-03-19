const Controller = require('./Controller.js');
const DepartamentoServices = require('../services/DepartamentoServices.js');

const departamentoServices = new DepartamentoServices();

class DepartamentoController extends Controller {
  constructor() {
    super(departamentoServices);
  }

  }

module.exports = DepartamentoController;