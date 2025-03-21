const Controller = require('./Controller.js');
const MonitorAtividadeServices = require('../services/MonitorAtividadeServices.js');

const monitorAtividadeServices = new MonitorAtividadeServices();

class MonitorAtividadeController extends Controller {
  constructor() {
    super(monitorAtividadeServices);
  }

  }

module.exports = MonitorAtividadeController;