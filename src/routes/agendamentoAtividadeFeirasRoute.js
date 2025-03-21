const { Router } = require('express');
const AgendamentoAtividadeFeiraController = require('../controllers/AgendamentoAtividadeFeiraController.js');

const agendamentoAtividadeFeiraController = new AgendamentoAtividadeFeiraController();

const router = Router();

router.get('/agendamentoAtividadeFeiras', (req, res) => agendamentoAtividadeFeiraController.pegaTodos(req, res));
router.get('/agendamentoAtividadeFeiras/:id', (req, res) => agendamentoAtividadeFeiraController.pegaUmPorId(req, res));
router.post('/agendamentoAtividadeFeiras', (req, res) => agendamentoAtividadeFeiraController.criaNovo(req, res));
router.put('/agendamentoAtividadeFeiras/:id', (req, res) => agendamentoAtividadeFeiraController.atualiza(req, res));
router.delete('/agendamentoAtividadeFeiras/:id', (req, res) => agendamentoAtividadeFeiraController.exclui(req, res));

module.exports = router;