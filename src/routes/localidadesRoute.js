const { Router } = require('express');
const LocalidadeController = require('../controllers/LocalidadeController.js');

const localidadeController = new LocalidadeController();

const router = Router();

router.get('/localidades', (req, res) => localidadeController.pegaTodos(req, res));
router.get('/localidades/:id', (req, res) => localidadeController.pegaUmPorId(req, res));
router.post('/localidades', (req, res) => localidadeController.criaNovo(req, res));
router.put('/localidades/:id', (req, res) => localidadeController.atualiza(req, res));
router.delete('/localidades/:id', (req, res) => localidadeController.exclui(req, res));

module.exports = router;