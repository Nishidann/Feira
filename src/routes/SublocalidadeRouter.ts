import { Router, Request, Response } from "express"
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO"
import { SublocalidadeController } from "../controllers/SublocalidadeController"


/**
 * @swagger
 * tags:
 *   - name: Sublocalidade
 *     description: Operações relacionadas as sublocalidades
 */
const sublocalidadeRouter = Router()
const sublocalidadeController = new SublocalidadeController()

/**
 * @swagger
 * /sublocalidades:
 *   post:
 *     summary: Cria uma nova sublocalidade
 *     tags: [Sublocalidade]
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
 *               idLocalidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sublocalidade criada
 *       404:
 *         description: Localidade não encontrada
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
sublocalidadeRouter.post("/sublocalidades", (req: Request<{}, {}, SublocalidadeDTO>, res: Response) => {
    sublocalidadeController.criar(req, res)
})

/**
 * @swagger
 * /sublocalidades/{id}:
 *   get:
 *     summary: Retorna uma sublocalidade pelo ID
 *     tags: [Sublocalidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da sublocalidade
 *     responses:
 *       200:
 *         description: Sublocalidade encontrada
 *       404:
 *         description: Sublocalidade não encontrado
 */
sublocalidadeRouter.get("/sublocalidades/:id", (req: Request, res: Response) => {
    sublocalidadeController.obterPorId(req, res)
})

/**
 * @swagger
 * /sublocalidades:
 *   get:
 *     summary: Retorna todas as sublocalidades
 *     tags: [Sublocalidade]
 *     responses:
 *       200:
 *         description: Lista de sublocalidades
 */
sublocalidadeRouter.get("/sublocalidades", (req: Request, res: Response) => {
    sublocalidadeController.obterTodos(req, res)
})

/**
 * @swagger
 * /sublocalidades/{id}:
 *   put:
 *     summary: Altera uma sublocalidade pelo ID
 *     tags: [Sublocalidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da sublocalidade
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
 *               idLocalidade:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sublocalidade alterada
 *       404:
 *         description: Sublocalidade ou localidade encontrada
 *       409:
 *         description: Chave duplicada
 */
sublocalidadeRouter.put("/sublocalidades/:id", (req: Request, res: Response) => {
    sublocalidadeController.alterarPorId(req, res)
})

/**
 * @swagger
 * /sublocalidades/{id}:
 *   delete:
 *     summary: Deleta uma sublocalidade pelo ID
 *     tags: [Sublocalidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da sublocalidade
 *     responses:
 *       200:
 *         description: sublocalidade deletada
 *       404:
 *         description: sublocalidade não encontrada
 */
sublocalidadeRouter.delete("/sublocalidades/:id", (req: Request, res: Response) => {
    sublocalidadeController.deletarPorId(req, res)
})

export default sublocalidadeRouter