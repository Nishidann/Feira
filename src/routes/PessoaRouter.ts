import { Router, Request, Response } from "express"
import { PessoaDTO } from "../dtos/PessoaDTO"

import { PessoaController } from "../controllers/PessoaController"

/**
 * @swagger
 * tags:
 *   - name: Pessoa
 *     description: Operações relacionadas a pessoas
 */

const pessoaRouter = Router()
const pessoaController = new PessoaController()


/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags: [Pessoa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: string
 *               celular:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               tipoPessoa:
 *                 type: string
 *                 enum: [MONITOR, ORGANIZADOR]
 *     responses:
 *       201:
 *         description: Usuário criado
 *       404:
 *         description: Pessoa não encontrada
 *       409:
 *         description: Chave duplicada
 *       500:
 *         description: Erro no servidor
 */
pessoaRouter.post("/pessoas", (req: Request<{}, {}, PessoaDTO>, res: Response) => {
    pessoaController.criar(req, res)
})

/**
 * @swagger
 * /pessoas/{id}:
 *   get:
 *     summary: Retorna uma pessoa pelo ID
 *     tags: [Pessoa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Pessoa encontrada
 *       404:
 *         description: Pessoa não encontrada
 */
pessoaRouter.get("/pessoas/:id", (req: Request, res: Response) => {
    pessoaController.obterPorId(req, res)
})

/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Retorna todas as pessoas
 *     tags: [Pessoa]
 *     responses:
 *       200:
 *         description: Lista de pessoas
 */
pessoaRouter.get("/pessoas", (req: Request, res: Response) => {
    pessoaController.obterTodos(req, res)
})

/**
 * @swagger
 * /pessoas/{id}:
 *   put:
 *     summary: Altera uma pessoa pelo ID
 *     tags: [Pessoa]
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
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: string
 *               celular:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               tipoPessoa:
 *                 type: string
 *                 enum: [MONITOR, ORGANIZADOR]
 *     responses:
 *       200:
 *         description: Pessoa alterada
 *       404:
 *         description: Pessoa não encontrada
 *       409:
 *         description: Chave duplicada
 */
pessoaRouter.put("/pessoas/:id", (req: Request, res: Response) => {
    pessoaController.alterarPorId(req, res)
})

/**
 * @swagger
 * /pessoas/{id}:
 *   delete:
 *     summary: Deleta uma pessoa pelo ID
 *     tags: [Pessoa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Pessoa deletada
 *       404:
 *         description: Pessoa não encontrada
 */
pessoaRouter.delete("/pessoas/:id", (req: Request, res: Response) => {
    pessoaController.deletarPorId(req, res)
})

export default pessoaRouter