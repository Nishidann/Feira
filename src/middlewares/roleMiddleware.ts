import { Request, Response, NextFunction } from "express";
import { TipoPessoa } from "../models/pessoa";

export const roleMiddleware = (roles: TipoPessoa[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const usuario = req.usuario; // Definido no authMiddleware

        if (!usuario || !roles.includes(usuario.tipoPessoa)) {
            return res.status(403).json({ 
                message: "Acesso negado: Você não tem permissão para acessar este recurso." 
            });
        }

        next();
    };
};