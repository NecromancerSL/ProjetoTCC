import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";

class CreateProdutoController {
    async handle(request: Request, response: Response) {

        const { nome, descricao, preco, qntEstoque, categoria } = request.body;

        const createProdutoService = new CreateProdutoService();

        const produto = await createProdutoService.execute({ nome, descricao, preco, qntEstoque, categoria })

        return response.json(produto);
    }
}

export { CreateProdutoController }