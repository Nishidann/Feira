const { Router } = require('express');
const ProfessorController = require('../controllers/ProfessorController.js');

const professorController = new ProfessorController();

const router = Router();

router.get('/professores', (req, res) => professorController.pegaTodos(req, res));
router.get('/professores/:id', (req, res) => professorController.pegaUmPorId(req, res));
router.post('/professores', (req, res) => professorController.criaNovo(req, res));
router.put('/professores/:id', (req, res) => professorController.atualiza(req, res));
router.delete('/professores/:id', (req, res) => professorController.exclui(req, res));

module.exports = router;