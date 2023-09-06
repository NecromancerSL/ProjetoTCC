import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateEnderecoController } from "./controllers/endereco/CreateEnderecoController";

const router = Router();
//router.get('/teste',(req: Request, res: Response ) => {

//    return res.status(201).json({message : 'Teste ok'})
//})

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.post('/adress', new CreateEnderecoController().handle);

export { router };