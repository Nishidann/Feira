import { Router, Request, Response } from "express"
import { AtividadeDTO } from "../dtos/AtividadeDTO"
import { AtividadeController } from "../controllers/AtividadeController"


/**
 * @swagger
 * tags:
 *   - name: Atividade
 *     description: Operações relacionadas ao agendamento da atividade na feira
 */
const atividadeRouter = Router()
const atividadeController = new AtividadeController()
/**
 * @swagger
 * /atividades:
 *   post:
 *     summary: Cria uma nova atividade
 *     tags: [Atividade]
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
 *               qtdMonitores:
 *                 type: integer
 *               duracaoSecao:
 *                 type: integer
 *               capacidadeVisitantes:
 *                 type: integer
 *               tipoAtividade:
 *                 type: string
 *                 enum: [SUBLOCALIDADE, LOCALIDADE]
 *               tipo:
 *                 type: string
 *                 enum: [SECAO, CONTINUO]
 *               status:
 *                 type: string
 *                 enum: [OCUPADA, OCIOSA, INATIVA]
 *               idFeira:
 *                 type: integer
 *               idProfessor:
 *                 type: integer
 *               idSublocalidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Atividade criada
 *       404:
 *         description: Professor, Sublocalidade ou Feira não encontrado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
atividadeRouter.post("/atividades", (req: Request<{}, {}, AtividadeDTO>, res: Response) => {
    atividadeController.criar(req, res)
})
/**
 * @swagger
 * /atividades/{id}:
 *   get:
 *     summary: Retorna uma atividade pelo ID
 *     tags: [Atividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da atividade
 *     responses:
 *       200:
 *         description: Atividade encontrada
 *       404:
 *         description: Atividade não encontrada
 */
atividadeRouter.get("/atividades/:id", (req: Request, res: Response) => {
    atividadeController.obterPorId(req, res)
})

/**
 * @swagger
 * /atividades:
 *   get:
 *     summary: Retorna todas as atividades
 *     tags: [Atividade]
 *     responses:
 *       200:
 *         description: Atividades encontradas
 *       500:
 *         description: Erro do servidor
 */
atividadeRouter.get("/atividades", (req: Request, res: Response) => {
    atividadeController.obterTodos(req, res)
})

/**
 * @swagger
 * /atividades/{id}:
 *   put:
 *     summary: Cria uma nova atividade
 *     tags: [Atividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da atividade
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
 *               qtdMonitores:
 *                 type: integer
 *               duracaoSecao:
 *                 type: integer
 *               capacidadeVisitantes:
 *                 type: integer
 *               tipoAtividade:
 *                 type: string
 *                 enum: [SUBLOCALIDADE, LOCALIDADE]
 *               tipo:
 *                 type: string
 *                 enum: [SECAO, CONTINUO]
 *               status:
 *                 type: string
 *                 enum: [OCUPADA, OCIOSA, INATIVA]
 *               idFeira:
 *                 type: integer
 *               idProfessor:
 *                 type: integer
 *               idSublocalidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Atividade criada
 *       404:
 *         description: Professor, Sublocalidade ou Feira não encontrado
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
atividadeRouter.put("/atividades/:id", (req: Request<{}, {}, AtividadeDTO>, res: Response) => {
    atividadeController.alterarPorId(req, res)
})


/**
 * @swagger
 * /atividades/{id}:
 *   delete:
 *     summary: Deleta uma atividade pelo ID
 *     tags: [Atividade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento da atividade
 *     responses:
 *       200:
 *         description: Atividade deletada
 *       404:
 *         description: Atividade não encontrada
 *       500:
 *         description: Erro no servidor
 */
atividadeRouter.delete("/atividades/:id", (req: Request, res: Response) => {
    atividadeController.deletarPorId(req, res)
})

export default atividadeRouter