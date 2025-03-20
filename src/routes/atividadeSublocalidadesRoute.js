const { Router } = require('express');
const AtividadeSublocalidadeController = require('../controllers/AtividadeSublocalidadeController.js');

const atividadeSublocalidadeController = new AtividadeSublocalidadeController();

const router = Router();

router.get('/atividadeSublocalidades', (req, res) => atividadeSublocalidadeController.pegaTodos(req, res));
router.get('/atividadeSublocalidades/:id', (req, res) => atividadeSublocalidadeController.pegaUmPorId(req, res));
router.post('/atividadeSublocalidades', (req, res) => atividadeSublocalidadeController.criaNovo(req, res));
router.put('/atividadeSublocalidades/:id', (req, res) => atividadeSublocalidadeController.atualiza(req, res));
router.delete('/atividadeSublocalidades/:id', (req, res) => atividadeSublocalidadeController.exclui(req, res));

module.exports = router;