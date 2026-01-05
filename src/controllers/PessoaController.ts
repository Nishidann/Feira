import { Request, Response } from "express";
import { PessoaService } from "../services/PessoaService";
import { PessoaDTO } from "../dtos/PessoaDTO";

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
        catch (error) {
            if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            }
            else {
                res.status(500).json({
                    message: 'Erro do servidor!'
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
        catch (error) {
            res.status(500).json({
                message: 'Erro do servidor!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const pessoa = await this.pessoaService.obterPorId(Number(id))

            if (!pessoa) {
                throw new Error();
            }
            res.status(200).json({ pessoa })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Pessoa não encontrada!',
                });
            }
            else {
                res.status(500).json({
                    message: 'Erro do servidor!',
                });
            }
        }
    }
    async alterarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const pessoa = await this.pessoaService.obterPorId(Number(id))
            await this.pessoaService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ pessoa });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Pessoa não encontrada!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
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
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Pessoa não encontrada!',
                });
            }
            else {
                res.status(500).json({
                    message: 'Erro do servidor!'
                });
            }
        }
    }
}