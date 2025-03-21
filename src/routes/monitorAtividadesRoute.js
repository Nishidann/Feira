const { Router } = require('express');
const MonitorAtividadeController = require('../controllers/MonitorAtividadeController.js');

const monitorAtividadeController = new MonitorAtividadeController();

const router = Router();

router.get('/monitorAtividades', (req, res) => monitorAtividadeController.pegaTodos(req, res));
router.get('/monitorAtividades/:id', (req, res) => monitorAtividadeController.pegaUmPorId(req, res));
router.post('/monitorAtividades', (req, res) => monitorAtividadeController.criaNovo(req, res));
router.put('/monitorAtividades/:id', (req, res) => monitorAtividadeController.atualiza(req, res));
router.delete('/monitorAtividades/:id', (req, res) => monitorAtividadeController.exclui(req, res));

module.exports = router;