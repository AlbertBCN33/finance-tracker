import { Request, Response } from 'express';
import WishlistsService from '../services/wishlists.service';

class WishlistsController {
  service = new WishlistsService();

  getAll = async (req: Request, res: Response) => {
    try {
      const response = await this.service.getAll();
      return res.json(response);
    } catch (error) {
      console.error('index_funds > get_all: ', error);
      return res.status(500).json({ error: 'index_funds.get_all.error' });
    }
  };
}

export default WishlistsController;
