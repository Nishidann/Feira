import { EntityManager } from "typeorm";
import { AppDataSource } from "../data-source";
import Pessoa from "../models/pessoa";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class AuthService {

    private entityManager: EntityManager

    constructor(){
        this.entityManager = AppDataSource.manager
    }
    
    async login(email: string, senha: string): Promise<{ token: string } | null> {
        
        const pessoa = await this.entityManager.getRepository(Pessoa).createQueryBuilder("pessoa")
            .where("pessoa.email = :email", { email })
            .addSelect("pessoa.senha")
            .getOne();

        if (!pessoa) {
            return null;
        }

        const senhaValida = await bcrypt.compare(senha, pessoa.senha);

        if (!senhaValida) {
            return null;
        }

        const secret = process.env.JWT_SECRET 
        
        const token = jwt.sign(
            { id: pessoa.id, tipoPessoa: pessoa.tipoPessoa }, 
            secret, 
            { expiresIn: "1h" }
        );

        return { token }
    }
}