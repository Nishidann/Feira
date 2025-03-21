const Controller = require('./Controller.js');
const AgendamentoAtividadeFeiraServices = require('../services/AgendamentoAtividadeFeiraService.js');

const agendamentoAtividadeFeiraServices = new AgendamentoAtividadeFeiraServices();

class AgendamentoAtividadeFeiraController extends Controller {
  constructor() {
    super(agendamentoAtividadeFeiraServices);
  }

  }

module.exports = AgendamentoAtividadeFeiraController;