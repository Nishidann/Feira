import { Request, Response } from "express";
import { LocalidadeDTO } from "../dtos/LocalidadeDTO";
import { LocalidadeService } from "../services/LocalidadeService";

export class LocalidadeController {

    private localidadeService: LocalidadeService

    constructor() {
        this.localidadeService = new LocalidadeService()
    }

    async criar(req: Request<{}, {}, LocalidadeDTO>, res: Response): Promise<void> {
        try {
            const localidade = await this.localidadeService.criar(req.body)

            res.status(201).json({ mensagem: `Localidade ${localidade.nome} criada` })
        }
        catch (error) {
            if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }

    async obterTodos(_req: Request, res: Response): Promise<void> {
        try {
            const localidades = await this.localidadeService.obterTodos()

            res.status(200).json({ localidades })
        }
        catch (error) {
            res.status(500).json({
                message: 'Erro ao buscar localidade!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {

            const { id } = req.params
            const localidade = await this.localidadeService.obterPorId(Number(id))

            res.status(200).json({ localidade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Localidade não encontrada!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }

    async alterarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const localidade = await this.localidadeService.obterPorId(Number(id))
            await this.localidadeService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ localidade });
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
                    message: 'Erro ao buscar localidade!',
                });
            }
        }
    }

    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const localidade = await this.localidadeService.deletarPorId(Number(id))
            if (!localidade) {
                throw new Error();
            }
            res.status(200).json({ localidade })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Localidade não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}