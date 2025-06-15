import { Request, Response } from 'express';

class AuthController {
  service = new AuthService();

  loginGoogle = async (req: Request, res: Response) => {
    try {
      const response = await this.service.loginGoogle();
      return res.json(response);
    } catch (error) {
      console.error('auth > login_google: ', error);
      return res.status(500).json({ error: 'auth.login_google.error' });
    }
  };

  loginUser = async (req: Request, res: Response) => {
    try {
      const response = await this.service.loginUser();
      return res.json(response);
    } catch (error) {
      console.error('auth > login_user: ', error);
      return res.status(500).json({ error: 'auth.login_user.error' });
    }
  };
}

export default AuthController;
