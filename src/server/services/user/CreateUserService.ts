import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf?: string; // Propriedade opcional
  telefone?: string; // Propriedade opcional
  enderecoId: number; // Propriedade opcional
}

class CreateUserService {
  async execute({ name, email, password, cpf, telefone, enderecoId }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        cpf: cpf || 'valor_padrao_cpf', // Valor padrão ou valor opcional
        telefone: telefone || 'valor_padrao_telefone', // Valor padrão ou valor opcional
        endereco: {
          connect: {
            id: enderecoId || 1, // Valor padrão ou valor opcional
          },
        },
      },
      include: {
        endereco: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
