import { Router } from 'express';
import IndexFundsController from '../controllers/index-funds.controller';

const indexFundsRouter = Router();
const controller = new IndexFundsController();

/* GET index-funds */
indexFundsRouter.get('/', controller.getAll);

export default indexFundsRouter;
