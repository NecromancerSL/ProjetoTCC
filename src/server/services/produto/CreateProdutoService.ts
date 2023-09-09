import prismaClient from "../../../prisma";

interface IProdutoRequest {
    nome: string;
    descricao: string;
    preco: number;
    qntEstoque: number;
    categoria: string;
}

class CreateProdutoService {
    async execute({ nome, descricao, preco, qntEstoque, categoria }: IProdutoRequest) {
        if (!nome) {
            throw new Error("Nome incorrect");
        }

        const produtoAlreadyExists = await prismaClient.produto.findFirst({
            where: {
                nome,
            },
        });

        if (produtoAlreadyExists) {
            throw new Error("Produto already exists");
        }

        const produto = await prismaClient.produto.create({
            data: {
                nome,
                descricao,
                preco,
                qntEstoque,
                categoria,
            },
            select: {
                id: true,
                nome: true,
                descricao: true,
                preco: true,
                qntEstoque: true,
                categoria: true,
            }
        });

        return produto;
    }
}

export { CreateProdutoService };