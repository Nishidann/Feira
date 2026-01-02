import { Request, Response } from "express";
import { DepartamentoDTO } from "../dtos/DepartamentoDTO";
import { DepartamentoService } from "../services/DepartamentoService";

export class DepartamentoController {

    private departamentoService: DepartamentoService

    constructor() {
        this.departamentoService = new DepartamentoService()
    }

    async criar(req: Request<{}, {}, DepartamentoDTO>, res: Response): Promise<void> {
        try {
            const departamento = await this.departamentoService.criar(req.body)

            res.status(201).json({ mensagem: `Departamento ${departamento.nome} criado` })
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
            const departamentos = await this.departamentoService.obterTodos()
            if (!departamentos) {
                throw new Error();
            }
            res.status(200).json({ departamentos })
        }
        catch (error) {
            res.status(500).json({
                message: 'Erro ao buscar departamentos!',
            });
        }
    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const departamento = await this.departamentoService.obterPorId(Number(id))

            if (!departamento) {
                throw new Error();
            }
            res.status(200).json({ departamento })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Departamento não encontrado!',
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
            const departamento = await this.departamentoService.obterPorId(Number(id))
            await this.departamentoService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ departamento });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Departamento não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar departamento!',
                });
            }
        }
    }

    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const departamento = await this.departamentoService.deletarPorId(Number(id))
            if (!departamento) {
                throw new Error();
            }
            res.status(200).json({ departamento })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Departamento não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}