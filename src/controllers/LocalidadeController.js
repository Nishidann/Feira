const Controller = require('./Controller.js');
const LocalidadeServices = require('../services/LocalidadeServices.js');

const localidadeServices = new LocalidadeServices();

class LocalidadeController extends Controller {
  constructor() {
    super(localidadeServices);
  }

  }

module.exports = LocalidadeController;