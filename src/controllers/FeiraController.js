const Controller = require('./Controller.js');
const FeiraServices = require('../services/FeiraServices.js');

const feiraServices = new FeiraServices();

class FeiraController extends Controller {
  constructor() {
    super(feiraServices);
  }

  }

module.exports = FeiraController;