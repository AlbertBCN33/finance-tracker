import { DecodedIdToken } from 'firebase-admin/auth';
import { FirebaseService } from './firebase.service';
import { VerifyTokenRequest } from '@finance-tracker/models';

class AuthService {
  /**
   * Auth: Verify token
   *
   * @description Verifies a Firebase ID token (JWT)
   * @async
   * @function verifyToken
   * @param {VerifyTokenRequest} request Request parameters
   * @return {Promise<DecodedIdToken>}
   */
  verifyToken = async (
    request: VerifyTokenRequest
  ): Promise<DecodedIdToken> => {
    const res = await FirebaseService.verifyToken(request);
    return res.result;
  };
}

export default AuthService;
