import { Request, Response } from "express";
import { AuthEnderecoService } from "../../services/endereco/AuthEnderecoService";

class AuthEnderecoController{   
    async handle(request: Request, response: Response){
        const { rua, numero, complemento, bairro, cep, cidade, uf } = request.body;

        const authEnderecoService = new AuthEnderecoService();

        const endereco = await authEnderecoService.execute({rua, numero, complemento, bairro, cep, cidade, uf})

        return response.json(endereco);
    }
}

export { AuthEnderecoController }