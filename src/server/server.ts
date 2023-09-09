import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors'
import {router} from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).send({error: err.message})
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})
app.listen(5173, () => console.log("SERVER ONLINE :)"))