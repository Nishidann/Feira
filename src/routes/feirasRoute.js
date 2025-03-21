const { Router } = require('express');
const FeiraController = require('../controllers/FeiraController.js');

const feiraController = new FeiraController();

const router = Router();

router.get('/feiras', (req, res) => feiraController.pegaTodos(req, res));
router.get('/feiras/:id', (req, res) => feiraController.pegaUmPorId(req, res));
router.post('/feiras', (req, res) => feiraController.criaNovo(req, res));
router.put('/feiras/:id', (req, res) => feiraController.atualiza(req, res));
router.delete('/feiras/:id', (req, res) => feiraController.exclui(req, res));

module.exports = router;