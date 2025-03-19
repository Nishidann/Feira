const { Router } = require('express');
const DepartamentoController = require('../controllers/DepartamentoController.js');

const departamentoController = new DepartamentoController();

const router = Router();

router.get('/departamentos', (req, res) => departamentoController.pegaTodos(req, res));
router.get('/departamentos/:id', (req, res) => departamentoController.pegaUmPorId(req, res));
router.post('/departamentos', (req, res) => departamentoController.criaNovo(req, res));
router.put('/departamentos/:id', (req, res) => departamentoController.atualiza(req, res));
router.delete('/departamentos/:id', (req, res) => departamentoController.exclui(req, res));

module.exports = router;