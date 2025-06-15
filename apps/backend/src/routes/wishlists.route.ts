import { Router } from 'express';
import WishlistsController from '../controllers/whishlists.controller';

const wihslistsRouter = Router();
const controller = new WishlistsController();

/* GET */
wihslistsRouter.get('/', controller.getAll);

export default wihslistsRouter;
