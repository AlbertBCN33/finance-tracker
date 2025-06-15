import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter = Router();
const controller = new AuthController();

/* Login: Google */
authRouter.get('/login/google', controller.loginGoogle);
/* Login: User + Password */
authRouter.get('/login/user', controller.loginUser);

export default authRouter;
