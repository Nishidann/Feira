import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

// Estendendo a interface do Express para incluir o payload do token
declare global {
    namespace Express {
        interface Request {
            usuario?: any;
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
        return res.status(401).json({ message: "Token mal formatado" });
    }

    try {
        const secret = process.env.JWT_SECRET
        const decoded = jwt.verify(token, secret);

        req.usuario = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
};