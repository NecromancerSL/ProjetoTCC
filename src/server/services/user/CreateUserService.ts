import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";


interface IUserRequest {
    name: string;  
    email: string;
    password: string;
    cpf?: string; // Propriedade opcional
    telefone?: string; // Propriedade opcional
    endereco?: string; // Propriedade opcional
}

class CreateUserService {
    async execute({name, email, password,}: IUserRequest) {
        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password: passwordHash,
                cpf: 'valor_padrao_cpf',
                telefone: 'valor_padrao_telefone',
                endereco: endereco.data
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        return user;
    }
}

export {CreateUserService };