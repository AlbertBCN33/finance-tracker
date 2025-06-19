import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service';

export const authHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      status: 401,
      name: 'AUTH',
      message: 'AUTH.VERIFY_TOKEN.EMPTY',
    });
  }

  const idToken = authHeader.split('Bearer ')[1];
  try {
    const authService = new AuthService();
    const decodedToken = await authService.verifyToken({ idToken });
    req.user = decodedToken; // Attach the user to the request
    next();
  } catch (error) {
    console.error('[Auth Middleware] Invalid token:', error);
    return res.status(401).json({
      success: false,
      status: 401,
      name: 'AUTH',
      message: 'AUTH.VERIFY_TOKEN.ERROR',
      error: error.stack,
    });
  }
};
