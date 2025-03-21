const { Router } = require('express');
const AtividadeLocalidadeController = require('../controllers/AtividadeLocalidadeController.js');

const atividadeLocalidadeController = new AtividadeLocalidadeController();

const router = Router();

router.get('/atividadeLocalidades', (req, res) => atividadeLocalidadeController.pegaTodos(req, res));
router.get('/atividadeLocalidades/:id', (req, res) => atividadeLocalidadeController.pegaUmPorId(req, res));
router.post('/atividadeLocalidades', (req, res) => atividadeLocalidadeController.criaNovo(req, res));
router.put('/atividadeLocalidades/:id', (req, res) => atividadeLocalidadeController.atualiza(req, res));
router.delete('/atividadeLocalidades/:id', (req, res) => atividadeLocalidadeController.exclui(req, res));

module.exports = router;