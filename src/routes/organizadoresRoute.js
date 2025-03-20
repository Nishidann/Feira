const { Router } = require('express');
const OrganizadorController = require('../controllers/OrganizadorController.js');

const organizadorController = new OrganizadorController();

const router = Router();

router.get('/organizadores', (req, res) => organizadorController.pegaTodos(req, res));
router.get('/organizadores/:id', (req, res) => organizadorController.pegaUmPorId(req, res));
router.post('/organizadores', (req, res) => organizadorController.criaNovo(req, res));
router.put('/organizadores/:id', (req, res) => organizadorController.atualiza(req, res));
router.delete('/organizadores/:id', (req, res) => organizadorController.exclui(req, res));

module.exports = router;    