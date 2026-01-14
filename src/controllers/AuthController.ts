import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, senha } = req.body;

        if (!email || !senha) {
            res.status(400).json({ message: "Email e senha são obrigatórios" });
            return;
        }

        try {
            const result = await this.authService.login(email, senha);

            if (!result) {
                res.status(401).json({ message: "Email ou senha inválidos" });
                return;
            }

            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
}