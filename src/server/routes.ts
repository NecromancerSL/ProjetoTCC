import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();
//router.get('/teste',(req: Request, res: Response ) => {

//    return res.status(201).json({message : 'Teste ok'})
//})

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router };