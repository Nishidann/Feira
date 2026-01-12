import { Router, Request, Response } from "express"
import { LocalidadeDTO } from "../dtos/LocalidadeDTO"
import { LocalidadeController } from "../controllers/LocalidadeController"

/**
 * @swagger
 * tags:
 *   - name: Localidade
 *     description: Operações relacionadas as localidades
 */
const localidadeRouter = Router()
const localidadeController = new LocalidadeController()

/**
 * @swagger
 * /localidades:
 *   post:
 *     summary: Cria uma nova localidade
 *     tags: [Localidade]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               qtdSalas:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Localidade criada
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
localidadeRouter.post("/localidades", (req: Request<{}, {}, LocalidadeDTO>, res: Response) => {
    localidadeController.criar(req, res)
})

/**
 * @swagger
 * /localidades/{id}:
 *   get:
 *     summary: Retorna uma localidade pelo ID
 *     tags: [Localidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da departamento
 *     responses:
 *       200:
 *         description: Localidade encontrada
 *       404:
 *         description: Localidade não encontrada
 */
localidadeRouter.get("/localidades/:id", (req: Request, res: Response) => {
    localidadeController.obterPorId(req, res)
})

/**
 * @swagger
 * /localidades:
 *   get:
 *     summary: Retorna todos as localidades
 *     tags: [Localidade]
 *     responses:
 *       200:
 *         description: Lista de localidades
 */
localidadeRouter.get("/localidades", (req: Request, res: Response) => {
    localidadeController.obterTodos(req, res)
})

/**
 * @swagger
 * /localidades/{id}:
 *   put:
 *     summary: Altera uma localidade pelo ID
 *     tags: [Localidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da localidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               qtdSalas:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Localidade alterada
 *       404:
 *         description: Localidade não encontrada
 *       409:
 *         description: Chave duplicada
 */
localidadeRouter.put("/localidades/:id", (req: Request, res: Response) => {
    localidadeController.alterarPorId(req, res)
})

/**
 * @swagger
 * /localidades/{id}:
 *   delete:
 *     summary: Deleta uma localidade pelo ID
 *     tags: [Localidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da departamento
 *     responses:
 *       200:
 *         description: Localidade deletada
 *       404:
 *         description: Localidade não encontrada
 */
localidadeRouter.delete("/localidades/:id", (req: Request, res: Response) => {
    localidadeController.deletarPorId(req, res)
})

export default localidadeRouter