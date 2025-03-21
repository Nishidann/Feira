const { Router } = require('express');
const AgendamentoFeiraController = require('../controllers/AgendamentoFeiraController.js');

const agendamentoFeiraController = new AgendamentoFeiraController();

const router = Router();

router.get('/agendamentoFeiras', (req, res) => agendamentoFeiraController.pegaTodos(req, res));
router.get('/agendamentoFeiras/:id', (req, res) => agendamentoFeiraController.pegaUmPorId(req, res));
router.post('/agendamentoFeiras', (req, res) => agendamentoFeiraController.criaNovo(req, res));
router.put('/agendamentoFeiras/:id', (req, res) => agendamentoFeiraController.atualiza(req, res));
router.delete('/agendamentoFeiras/:id', (req, res) => agendamentoFeiraController.exclui(req, res));

module.exports = router;