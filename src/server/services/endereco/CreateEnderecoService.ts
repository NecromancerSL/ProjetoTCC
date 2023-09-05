import prismaClient from "../../../prisma";

interface IEnderecoRequest {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string; // Adicione a propriedade 'bairro' à interface
    cep: number;
    cidade: string;
    uf: string;
}

class CreateEnderecoService {
    async execute({ rua, numero, complemento, bairro, cep, cidade, uf }: IEnderecoRequest) {
        if (!rua) {
            throw new Error("Rua incorrect");
        }

        const enderecoAlreadyExists = await prismaClient.endereco.findFirst({
            where: {
                rua
            }
        });

        if (enderecoAlreadyExists) {
            throw new Error("Endereco already exists");
        }

        const endereco = await prismaClient.endereco.create({
            data: {
                rua,
                numero,
                complemento,
                bairro,
                cep,
                cidade,
                uf
            },
            select: {
                id: true,
                rua: true,
                numero: true,
                complemento: true,
                bairro: true,
                cep: true,
                cidade: true,
                uf: true
            }
        });

        return endereco;
    }
}

export { CreateEnderecoService };
