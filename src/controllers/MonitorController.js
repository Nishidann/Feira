const Controller = require('./Controller.js');
const MonitorServices = require('../services/MonitorServices.js');

const monitorServices = new MonitorServices();

class MonitorController extends Controller {
  constructor() {
    super(monitorServices);
  }

  }

module.exports = MonitorController;