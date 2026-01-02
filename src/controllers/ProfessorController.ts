import { Request, Response } from "express";
import { ProfessorDTO } from "../dtos/ProfessorDTO";
import { ProfessorService } from "../services/ProfessorService";

export class ProfessorController {

    private professorService: ProfessorService

    constructor() {
        this.professorService = new ProfessorService()
    }

    async criar(req: Request<{}, {}, ProfessorDTO>, res: Response): Promise<void> {
        try {
            const professor = await this.professorService.criar(req.body)

            res.status(201).json({ mensagem: `Professor ${professor.nome} criado` })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Departamento não encontrado!',
                });
            }
            else if (error.code === 23505) {
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
            const professores = await this.professorService.obterTodos()

            res.status(200).json({ professores })
        }
        catch (error) {
            res.status(500).json({
                message: 'Erro ao buscar professores!',
            });
        }

    }

    async obterPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const professor = await this.professorService.obterPorId(Number(id))

            res.status(200).json({ professor })
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Professor não encontrado!',
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
            const feira = await this.professorService.obterPorId(Number(id))
            await this.professorService.alterarPorId(Number(id), dadosAtualizados);
            res.status(200).json({ feira });
        } catch (error) {
            console.log(error.name);
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Professor não encontrado!',
                });
            }
            else if (error.code == 23505) {
                res.status(409).json({
                    message: 'Erro de chave duplicada!',
                });
            } else {
                res.status(500).json({
                    message: 'Erro ao buscar Professor!',
                });
            }
        }
    }
    async deletarPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const feira = await this.professorService.deletarPorId(Number(id))
            if (!feira) {
                throw new Error();
            }
            res.status(200).json({})
        }
        catch (error) {
            if (error.name === "EntityNotFoundError") {
                res.status(404).json({
                    message: 'Professor não encontrado!',
                });
            }
            else {
                res.status(500).json({ message: 'Erro interno' });
            }
        }
    }
}