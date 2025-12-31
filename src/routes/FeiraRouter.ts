import { Router, Request, Response } from "express"
import { FeiraController } from "../controllers/FeiraController"
import { FeiraDTO } from "../dtos/FeiraDTO"


/**
 * @swagger
 * tags:
 *   - name: Feira
 *     description: Operações relacionadas as feiras
 */
const feiraRouter = Router()
const feiraController = new FeiraController()

/**
 * @swagger
 * /feira:
 *   post:
 *     summary: Cria uma nova feira
 *     tags: [Feira]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Feira criada
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
feiraRouter.post("/feira", (req: Request<{}, {}, FeiraDTO>, res: Response) => {
    feiraController.criar(req, res)
})

/**
 * @swagger
 * /feira/{id}:
 *   get:
 *     summary: Retorna uma feira pelo ID
 *     tags: [Feira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da feira
 *     responses:
 *       200:
 *         description: Feira encontrada
 *       404:
 *         description: Feira não encontrada
 */
feiraRouter.get("/feira/:id", (req: Request, res: Response) => {
    feiraController.obterPorId(req, res)
})

/**
 * @swagger
 * /feira:
 *   get:
 *     summary: Retorna todas as feiras
 *     tags: [Feira]
 *     responses:
 *       200:
 *         description: Lista de feiras
 */
feiraRouter.get("/feira", (req: Request, res: Response) => {
    feiraController.obterTodos(req, res)
})

/**
 * @swagger
 * /feira/{id}:
 *   put:
 *     summary: Altera uma feira pelo ID
 *     tags: [Feira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da feira
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: feira alterada
 *       404:
 *         description: feira não encontrada
 *       409:
 *         description: Chave duplicada
 */
feiraRouter.put("/feira/:id", (req: Request, res: Response) => {
    feiraController.alterarPorId(req, res)
})

/**
 * @swagger
 * /feira/{id}:
 *   delete:
 *     summary: Deleta uma feira pelo ID
 *     tags: [Feira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da feira
 *     responses:
 *       200:
 *         description: feira deletada
 *       404:
 *         description: feira não encontrada
 */
feiraRouter.delete("/feira/:id", (req: Request, res: Response) => {
    feiraController.deletarPorId(req, res)
})

export default feiraRouter