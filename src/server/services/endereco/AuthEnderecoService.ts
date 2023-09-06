import prismaClient from "../../../prisma";

interface AuthEnderecoRequest {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: number;
    cidade: string;
    uf: string;
}

class AuthEnderecoService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async execute({ rua, numero, complemento, bairro, cep, cidade, uf, }: AuthEnderecoRequest) {
        const endereco = await prismaClient.endereco.findFirst({
            where: {
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cep: cep,
                cidade: cidade,
                uf: uf,
            }
        });

        if (!endereco) {
            throw new Error("Endereco incorrect");
        }

        return endereco;
    }
}

export { AuthEnderecoService };