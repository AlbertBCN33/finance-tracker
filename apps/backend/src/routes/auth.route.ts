import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter = Router();
const controller = new AuthController();

/* Auth: Verify token */
authRouter.get('/token/verify', controller.verifyToken);

export default authRouter;
