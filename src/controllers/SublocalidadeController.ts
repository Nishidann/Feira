import { Request, Response } from "express";
import { SublocalidadeService } from "../services/SublocalidadeService";
import { SublocalidadeDTO } from "../dtos/SublocalidadeDTO";

export class SublocalidadeController {

    private sublocalidadeService: SublocalidadeService

    constructor() {
        this.sublocalidadeService = new SublocalidadeService()
    }

    async criar(req: Request<{}, {}, SublocalidadeDTO>, res: Response): Promise<void> {
        try {
            const sublocalidade = await this.sublocalidadeService.criar(req.body)

            res.status(201).json({ mensagem: `Sublocalidade ${sublocalidade.nome} criada` })
        }
        catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Id da localidade não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro do servidor!',
                });
            }
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const sublocalidades = await this.sublocalidadeService.obterTodos()

            res.status(200).json({ sublocalidades })
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
            const sublocalidade = await this.sublocalidadeService.obterPorId(Number(id))

            res.status(200).json({ sublocalidade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Sublocalidade não encontrada!',
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
            const sublocalidade = await this.sublocalidadeService.obterPorId(Number(id))
            await this.sublocalidadeService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ sublocalidade });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Localidade não encontrada!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro do servidor!',
                });
            }
        }
    }
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const sublocalidade = await this.sublocalidadeService.deletarPorId(Number(id))
            if (!sublocalidade) {
                throw new Error();
            }
            res.status(200).json({ sublocalidade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Sublocalidade não encontrada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}