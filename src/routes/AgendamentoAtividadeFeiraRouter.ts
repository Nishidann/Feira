import { Router, Request, Response } from "express"
import { AgendamentoAtividadeFeiraDTO } from "../dtos/AgendamentoAtividadeFeiraDTO"
import { AgendamentoAtividadeFeiraController } from "../controllers/AgendamentoAtividadeFeiraController"

/**
 * @swagger
 * tags:
 *   - name: AgendamentoAtividadeFeira
 *     description: Operações relacionadas ao agendamento da atividade na feira
 */
const agendamentoAtividadeFeiraRouter = Router()
const agendamentoAtividadeFeiraController = new AgendamentoAtividadeFeiraController()

/**
 * @swagger
 * /agendamentos/atividades/feira:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [AgendamentoAtividadeFeira]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qtdMonitoresInscritos:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [OCUPADO, DISPONIVEL]
 *               idAtividade:
 *                 type: integer
 *               idAgendamentoFeira:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Um agendanmento da atividade da feira criada
 *       404:
 *         description: Atividade ou Agendamento da feira não encontrado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
agendamentoAtividadeFeiraRouter.post("/agendamentos/atividades/feira", (req: Request<{}, {}, AgendamentoAtividadeFeiraDTO>, res: Response) => {
    agendamentoAtividadeFeiraController.criar(req, res)
})

/**
 * @swagger
 * /agendamentos/atividades/feira/{id}:
 *   get:
 *     summary: Retorna um agendamento da feira pelo ID
 *     tags: [AgendamentoAtividadeFeira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Agendamento da atvidade da feira encontrado
 *       404:
 *         description: Agendamento da atvidade da feira não encontrado
 *       500:
 *         description: Erro no servidor
 */
agendamentoAtividadeFeiraRouter.get("/agendamentos/atividades/feira/:id", (req: Request, res: Response) => {
    agendamentoAtividadeFeiraController.obterPorId(req, res)
})

/**
 * @swagger
 * /agendamentos/atividades/feira:
 *   get:
 *     summary: Retorna todas os agendamentos da feira
 *     tags: [AgendamentoAtividadeFeira]
 *     responses:
 *       200:
 *         description: Lista de agendamentos de atvidade referentes a feira
 *       500:
 *         description: Erro no servidor
 */
agendamentoAtividadeFeiraRouter.get("/agendamentos/atividades/feira", (req: Request, res: Response) => {
    agendamentoAtividadeFeiraController.obterTodos(req, res)
})

/**
 * @swagger
 * /agendamentos/atividades/feira/{id}:
 *   put:
 *     summary: Altera um agendamento de atividade de uma feira pelo ID
 *     tags: [AgendamentoAtividadeFeira]
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
 *               qtdMonitoresInscritos:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [OCUPADO, DISPONIVEL]
 *               idAtividade:
 *                 type: integer
 *               idAgendamentoFeira:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Agendamento da feira alterado
 *       404:
 *         description: Atividade ou Agendamento da feira não encontrado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
agendamentoAtividadeFeiraRouter.put("/agendamentos/atividades/feira/:id", (req: Request, res: Response) => {
    agendamentoAtividadeFeiraController.alterarPorId(req, res)
})

/**
 * @swagger
 * /agendamentos/atividades/feira/{id}:
 *   delete:
 *     summary: Deleta um agendamento de atividade da feira pelo ID
 *     tags: [AgendamentoAtividadeFeira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento da atividade
 *     responses:
 *       200:
 *         description: Agendamento de atividade da feira deletado
 *       404:
 *         description: Agendamento de atividade da feira não encontrado
 *       500:
 *         description: Erro no servidor
 */
agendamentoAtividadeFeiraRouter.delete("/agendamentos/atividades/feira/:id", (req: Request, res: Response) => {
    agendamentoAtividadeFeiraController.deletarPorId(req, res)
})

export default agendamentoAtividadeFeiraRouter