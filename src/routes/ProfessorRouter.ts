import { Router, Request, Response } from "express"
import { ProfessorController } from "../controllers/ProfessorController"
import { ProfessorDTO } from "../dtos/ProfessorDTO"

/**
 * @swagger
 * tags:
 *   - name: Professor
 *     description: Operações relacionadas aos professores
 */
const professorRouter = Router()
const professorController = new ProfessorController()


/**
 * @swagger
 * /professor:
 *   post:
 *     summary: Cria um novo professor
 *     tags: [Professor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idDepartamento:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Professor criado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
professorRouter.post("/professor", (req: Request<{}, {}, ProfessorDTO>, res: Response) => {
    professorController.criar(req, res)
})

/**
 * @swagger
 * /professor/{id}:
 *   get:
 *     summary: Retorna um Professor pelo ID
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Professor
 *     responses:
 *       200:
 *         description: Professor encontrado
 *       404:
 *         description: Professor não encontrado
 */
professorRouter.get("/professor/:id", (req: Request, res: Response) => {
    professorController.obterPorId(req, res)
})

/**
 * @swagger
 * /professor:
 *   get:
 *     summary: Retorna todas os professores
 *     tags: [Professor]
 *     responses:
 *       200:
 *         description: Lista de professores
 */
professorRouter.get("/professor", (req: Request, res: Response) => {
    professorController.obterTodos(req, res)
})

/**
 * @swagger
 * /professor/{id}:
 *   put:
 *     summary: Altera uma professor pelo ID
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da professor
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
 *         description: professor alterado
 *       404:
 *         description: professor não encontrado
 *       409:
 *         description: Chave duplicada
 */
professorRouter.put("/professor/:id", (req: Request, res: Response) => {
    professorController.alterarPorId(req, res)
})

/**
 * @swagger
 * /professor/{id}:
 *   delete:
 *     summary: Deleta uma professor pelo ID
 *     tags: [Professor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do professor
 *     responses:
 *       200:
 *         description: professor deletado
 *       404:
 *         description: professor não encontrado
 */
professorRouter.delete("/professor/:id", (req: Request, res: Response) => {
    professorController.deletarPorId(req, res)
})
export default professorRouter