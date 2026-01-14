import { Router, Request, Response } from "express"
import { AgendamentoFeiraDTO } from "../dtos/AgendamentoFeiraDTO"
import { AgendamentoFeiraController } from "../controllers/AgendamentoFeiraController"

/**
 * @swagger
 * tags:
 *   - name: AgendamentoFeira
 *     description: Operações relacionadas ao agendamento da feira
 */
const agendamentoFeiraRouter = Router()
const agendamentoFeiraController = new AgendamentoFeiraController()

/**
 * @swagger
 * /agendamentos/feira:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [AgendamentoFeira]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date-time
 *               turno:
 *                 type: string
 *                 enum: [MANHA, TARDE, NOITE]
 *               qtdAlunosSuportados:
 *                 type: integer
 *               idFeira:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Agendamento referente a feira criado
 *       404:
 *         description: Feira não encontrada
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
agendamentoFeiraRouter.post("/agendamentos/feira", (req: Request<{}, {}, AgendamentoFeiraDTO>, res: Response) => {
    agendamentoFeiraController.criar(req, res)
})

/**
 * @swagger
 * /agendamentos/feira/{id}:
 *   get:
 *     summary: Retorna um agendamento da feira pelo ID
 *     tags: [AgendamentoFeira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Agendamento da feira encontrado
 *       404:
 *         description: Agendamento da feira não encontrada
 */
agendamentoFeiraRouter.get("/agendamentos/feira/:id", (req: Request, res: Response) => {
    agendamentoFeiraController.obterPorId(req, res)
})

/**
 * @swagger
 * /agendamentos/feira:
 *   get:
 *     summary: Retorna todas os agendamentos da feira
 *     tags: [AgendamentoFeira]
 *     responses:
 *       200:
 *         description: Lista de agendamentos referente a feira
 */
agendamentoFeiraRouter.get("/agendamentos/feira", (req: Request, res: Response) => {
    agendamentoFeiraController.obterTodos(req, res)
})

/**
 * @swagger
 * /agendamentos/feira/{id}:
 *   put:
 *     summary: Altera um agendamento de uma feira pelo ID
 *     tags: [AgendamentoFeira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento da feira
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date-time
 *               turno:
 *                 type: string
 *                 enum: [MANHA, TARDE, NOITE]
 *               qtdAlunosSuportados:
 *                 type: integer
 *               idFeira:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Agendamento da feira alterado
 *       404:
 *         description: Agendamento da feira não encontrado
 *       409:
 *         description: Chave duplicada
 */
agendamentoFeiraRouter.put("/agendamentos/feira/:id", (req: Request, res: Response) => {
    agendamentoFeiraController.alterarPorId(req, res)
})

/**
 * @swagger
 * /agendamentos/feira/{id}:
 *   delete:
 *     summary: Deleta um agendamento da feira pelo ID
 *     tags: [AgendamentoFeira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento
 *     responses:
 *       200:
 *         description: Agendamento da feira deletado
 *       404:
 *         description: Agendamento da feira não encontrado
 */
agendamentoFeiraRouter.delete("/agendamentos/feira/:id", (req: Request, res: Response) => {
    agendamentoFeiraController.deletarPorId(req, res)
})

export default agendamentoFeiraRouter