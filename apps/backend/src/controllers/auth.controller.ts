import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/auth.service';
import { ApiResponse, VerifyTokenRequest } from '@finance-tracker/models';
import { DecodedIdToken } from 'firebase-admin/auth';

class AuthController {
  private service = new AuthService();

  /**
   * Auth: Verify token
   *
   * @description Verifies a Firebase ID token (JWT)
   * @async
   * @function verifyToken
   */
  verifyToken = async (
    req: Request<unknown, unknown, unknown, VerifyTokenRequest>,
    res: Response<ApiResponse<DecodedIdToken>>,
    next: NextFunction
  ) => {
    try {
      const { idToken } = req.query;
      const data = await this.service.verifyToken({ idToken });
      return res.json({
        success: true,
        name: 'AUTH',
        message: 'AUTH.VERIFY_TOKEN.SUCCESS',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
