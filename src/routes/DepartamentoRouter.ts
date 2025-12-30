import { Router, Request, Response } from "express"
import { DepartamentoController } from "../controllers/DepartamentoController"
import { DepartamentoDTO } from "../dtos/DepartamentoDTO"

/**
 * @swagger
 * tags:
 *   - name: Departamento
 *     description: Operações relacionadas aos departamentos 
 */
const departamentoRouter = Router()
const departamentoController = new DepartamentoController()


/**
 * @swagger
 * /departamentos:
 *   post:
 *     summary: Cria um novo departamento
 *     tags: [Departamento]
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
 *         description: Departamento criado
 *       404:
 *         description: departamento não encontrado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
departamentoRouter.post("/departamentos", (req: Request<{}, {}, DepartamentoDTO>, res: Response) => {
    departamentoController.criar(req, res)
})

/**
 * @swagger
 * /departamentos/{id}:
 *   get:
 *     summary: Retorna um departamento pelo ID
 *     tags: [Departamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da departamento
 *     responses:
 *       200:
 *         description: departamento encontrado
 *       404:
 *         description: departamento não encontrado
 */
departamentoRouter.get("/departamentos/:id", (req: Request, res: Response) => {
    departamentoController.obterPorId(req, res)
})

/**
 * @swagger
 * /departamentos:
 *   get:
 *     summary: Retorna todos os departamentos
 *     tags: [Departamento]
 *     responses:
 *       200:
 *         description: Lista de departamentos
 */
departamentoRouter.get("/departamentos", (req: Request, res: Response) => {
    departamentoController.obterTodos(req, res)
})

/**
 * @swagger
 * /departamentos/{id}:
 *   put:
 *     summary: Altera um departamento pelo ID
 *     tags: [Departamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da departamento
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
 *         description: departamento alterado
 *       404:
 *         description: departamento não encontrado
 *       409:
 *         description: Chave duplicada
 */
departamentoRouter.put("/departamentos/:id", (req: Request, res: Response) => {
    departamentoController.alterarPorId(req, res)
})

/**
 * @swagger
 * /departamentos/{id}:
 *   delete:
 *     summary: Deleta um departamento pelo ID
 *     tags: [Departamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da departamento
 *     responses:
 *       200:
 *         description: departamento deletado
 *       404:
 *         description: departamento não encontrado
 */
departamentoRouter.delete("/departamentos/:id", (req: Request, res: Response) => {
    departamentoController.deletarPorId(req, res)
})


export default departamentoRouter