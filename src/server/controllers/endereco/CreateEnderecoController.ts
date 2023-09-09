import { Request, Response } from "express";
import { CreateEnderecoService } from "../../services/endereco/CreateEnderecoService";

class CreateEnderecoController {
  async handle(request: Request, response: Response) {
    const { rua, numero, complemento, bairro, cidade, uf, cep } = request.body;

    try {
      const createEnderecoService = new CreateEnderecoService();
      const endereco = await createEnderecoService.execute({
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
      });

      return response.json(endereco);
    } catch  { // Especifique o tipo manualmente como 'any' ou 'Error'
      return response.status(400).json("Deu ruim");
    }
  }
}

export { CreateEnderecoController };
