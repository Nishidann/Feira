const { Router } = require('express');
const MonitoresController = require('../controllers/MonitorController.js');

const monitorController = new MonitoresController();

const router = Router();

router.get('/monitores', (req, res) => monitorController.pegaTodos(req, res));
router.get('/monitores/:id', (req, res) => monitorController.pegaUmPorId(req, res));
router.post('/monitores', (req, res) => monitorController.criaNovo(req, res));
router.put('/monitores/:id', (req, res) => monitorController.atualiza(req, res));
router.delete('/monitores/:id', (req, res) => monitorController.exclui(req, res));

module.exports = router;