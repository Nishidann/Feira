const { Router } = require('express');
const SublocalidadeController = require('../controllers/SublocalidadeController.js');

const sublocalidadeController = new SublocalidadeController();

const router = Router();

router.get('/sublocalidades', (req, res) => sublocalidadeController.pegaTodos(req, res));
router.get('/sublocalidades/:id', (req, res) => sublocalidadeController.pegaUmPorId(req, res));
router.post('/sublocalidades', (req, res) => sublocalidadeController.criaNovo(req, res));
router.put('/sublocalidades/:id', (req, res) => sublocalidadeController.atualiza(req, res));
router.delete('/sublocalidades/:id', (req, res) => sublocalidadeController.exclui(req, res));

module.exports = router;