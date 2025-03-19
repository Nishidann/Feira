const Controller = require('./Controller.js');
const ProfessorServices = require('../services/ProfessorServices.js');

const professorServices = new ProfessorServices();

class ProfessorController extends Controller {
  constructor() {
    super(professorServices);
  }

  }

module.exports = ProfessorController;