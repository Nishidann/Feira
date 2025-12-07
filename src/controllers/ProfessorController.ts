import { Request, Response } from "express";
import { ProfessorDTO } from "../dtos/ProfessorDTO";
import { ProfessorService } from "../services/ProfessorService";

export class ProfessorController{

    private professorService: ProfessorService

    constructor(){
        this.professorService = new ProfessorService()
    }

    async criar(req: Request<{}, {}, ProfessorDTO>, res: Response): Promise<void>{
        const professor = await this.professorService.criar(req.body)

        res.status(201).json({ mensagem: `Professor ${professor.nome} criado` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const professores = await this.professorService.obterTodos()

        res.status(200).json({ professores })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const professor = await this.professorService.obterPorId(id)

        res.status(200).json({ professor })
    }
}