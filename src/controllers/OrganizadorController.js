const Controller = require('./Controller.js');
const OrganizadorServices = require('../services/OrganizadorServices.js');

const organizadorServices = new OrganizadorServices();

class OrganizadorController extends Controller {
  constructor() {
    super(organizadorServices);
  }
}

module.exports = OrganizadorController;