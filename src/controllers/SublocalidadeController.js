const Controller = require('./Controller.js');
const SublocalidadeServices = require('../services/SublocalidadeServices.js');

const sublocalidadeServices = new SublocalidadeServices();

class SublocalidadeController extends Controller {
  constructor() {
    super(sublocalidadeServices);
  }

  }

module.exports = SublocalidadeController;