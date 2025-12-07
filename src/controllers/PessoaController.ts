import { Request, Response } from "express";
import { PessoaService } from "../services/PessoaService";
import { PessoaDTO } from "../dtos/PessoaDTO";

export class PessoaController{

    private pessoaService: PessoaService

    constructor(){
        this.pessoaService = new PessoaService()
    }

    async criar(req: Request<{}, {}, PessoaDTO>, res: Response): Promise<void>{
        const pessoa = await this.pessoaService.criar(req.body)

        res.status(201).json({ mensagem: `Usuário ${pessoa.nome} criado` })
    }

    async obterTodos(_req: Request, res: Response): Promise<void>{
        const pessoas = await this.pessoaService.obterTodos()

        res.status(200).json({ pessoas })
    }

    async obterPorId(req: Request<{ id: number }>, res: Response): Promise<void>{
        const { id } = req.params
        const pessoa = await this.pessoaService.obterPorId(id)

        res.status(200).json({ pessoa })
    }
}