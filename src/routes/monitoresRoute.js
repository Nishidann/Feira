const { Router } = require('express');
const MonitoresController = require('../controllers/MonitoresController.js');

const MonitorController = new MonitoresController();

const router = Router();

router.get('/Monitores', (req, res) => MonitorController.pegaTodos(req, res));
router.get('/Monitores/:id', (req, res) => MonitorController.pegaUmPorId(req, res));
router.post('/Monitores', (req, res) => MonitorController.criaNovo(req, res));
router.put('/Monitores/:id', (req, res) => MonitorController.atualiza(req, res));
router.delete('/Monitores/:id', (req, res) => MonitorController.exclui(req, res));

module.exports = router;