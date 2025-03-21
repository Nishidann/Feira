const Controller = require('./Controller.js');
const AgendamentoFeiraServices = require('../services/AgendamentoFeiraServices.js');

const agendamentoFeiraServices = new AgendamentoFeiraServices();

class AgendamentoFeiraController extends Controller {
  constructor() {
    super(agendamentoFeiraServices);
  }

  }

module.exports = AgendamentoFeiraController;