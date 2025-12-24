import { Request, Response } from "express";
import { PessoaService } from "../services/PessoaService";
import { PessoaDTO } from "../dtos/PessoaDTO";
import { error } from "console";

export class PessoaController {

    private pessoaService: PessoaService

    constructor() {
        this.pessoaService = new PessoaService()
    }

    async criar(req: Request<{}, {}, PessoaDTO>, res: Response): Promise<void> {
        try {
            const pessoa = await this.pessoaService.criar(req.body)

            res.status(201).json({ mensagem: `Usuário ${pessoa.nome} criado` })
        }
        catch (error: any) {
            if (error = 409) {
                res.status(409).json({
                    message: 'Email ou RG já cadastrado!',
                });
            }
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const pessoas = await this.pessoaService.obterTodos()
            if (!pessoas) {
                throw new Error();
            }
            res.status(200).json({ pessoas })
        }
        catch (error: any) {
            res.status(404).json({
                message: 'Chave duplicada encontrada!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const pessoa = await this.pessoaService.obterPorId(Number(id))
            console.log(error);
            res.status(200).json({ pessoa })
        }
        catch (error: any) {
            res.status(404).json({
                message: 'Pessoa não encontrada!',
            });
        }
    }
    async alterarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body; // Novos dados da pessoa
            const pessoa = await this.pessoaService.obterPorId(Number(id))
            await this.pessoaService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ pessoa });
        } catch (error: any) {
            console.log(error);
            if (error = 404) {
                res.status(404).json({
                    message: 'Pessoa não encontrada!',
                });
            }
            else if (error.code = 409) {
                res.status(409).json({
                    message: 'Chave duplicada encontrada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar pessoas!',
                });
            }
        }
    }
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const pessoa = await this.pessoaService.deletarPorId(Number(id))
            if (!pessoa) {
                throw new Error();
            }
            res.status(200).json({ pessoa })
        }
        catch (error: any) {
            res.status(404).json({
                message: 'Pessoa não encontrada!',
            });
        }
    }
}