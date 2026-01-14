import { Router, Request, Response } from "express"
import { MonitorAtividadeDTO } from "../dtos/MonitorAtividadeDTO"
import { MonitorAtividadeController } from "../controllers/MonitorAtividadeController"

/**
 * @swagger
 * tags:
 *   - name: MonitorAtividade
 *     description: Operações relacionadas ao Monitor da atividade das atividades do monitor
 */

const monitorAtividadeRouter = Router()
const monitorAtividadeController = new MonitorAtividadeController()

/**
 * @swagger
 * /monitores/atividade:
 *   post:
 *     summary: Cria um novo Monitor da atividade para o monitor em uma atividade 
 *     tags: [MonitorAtividade]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               horaEntrada:
 *                 type: string
 *                 format: date-time
 *               horaSaida:
 *                 type: string
 *                 format: date-time
 *               idAgendamentoAtividadeFeira:
 *                 type: integer
 *               idPessoa:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Monitor da atividade criado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
monitorAtividadeRouter.post("/monitores/atividade", (req: Request<{}, {}, MonitorAtividadeDTO>, res: Response) => {
    monitorAtividadeController.criar(req, res)
})

/**
 * @swagger
 * /monitores/atividade/{id}:
 *   get:
 *     summary: Retorna um Monitor da atividade da atividade
 *     tags: [MonitorAtividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Monitor da atividade encontrado
 *       404:
 *         description: Monitor da atividade não encontrado
 */
monitorAtividadeRouter.get("/monitores/atividade/:id", (req: Request, res: Response) => {
    monitorAtividadeController.obterPorId(req, res)
})

/**
 * @swagger
 * /monitores/atividade:
 *   get:
 *     summary: Retorna todos os Monitores da atividade
 *     tags: [MonitorAtividade]
 *     responses:
 *       200:
 *         description: Lista de Monitor da atividades
 */
monitorAtividadeRouter.get("/monitores/atividade", (req: Request, res: Response) => {
    monitorAtividadeController.obterTodos(req, res)
})

/**
 * @swagger
 * /monitores/atividade/{id}:
 *   put:
 *     summary: Altera um Monitor da atividade pelo ID
 *     tags: [MonitorAtividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               horaEntrada:
 *                 type: string
 *                 format: date-time
 *               horaSaida:
 *                 type: string
 *                 format: date-time
 *               idAgendamentoAtividadeFeira:
 *                 type: integer
 *               idPessoa:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Monitor da atividade alterado
 *       404:
 *         description: Monitor da atividade não encontrado
 *       409:
 *         description: Chave duplicada
 */
monitorAtividadeRouter.put("/monitores/atividade/:id", (req: Request, res: Response) => {
    monitorAtividadeController.alterarPorId(req, res)
})

/**
 * @swagger
 * /monitores/atividade/{id}:
 *   delete:
 *     summary: Deleta um Monitor da atividade pelo ID
 *     tags: [MonitorAtividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Monitor da atividade deletado
 *       404:
 *         description: Monitor da atividade não encontrado
 */
monitorAtividadeRouter.delete("/monitores/atividade/:id", (req: Request, res: Response) => {
    monitorAtividadeController.deletarPorId(req, res)
})

export default monitorAtividadeRouter