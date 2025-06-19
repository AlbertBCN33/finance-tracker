import { ApiErrorResponse, VerifyTokenRequest } from '@finance-tracker/models';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';

/**
 * Auth: Verify token
 *
 * @description Verifies a Firebase ID token (JWT)
 * @async
 * @function verifyToken
 * @param {VerifyTokenRequest} request Request parameters
 * @return {Promise<DecodedIdToken>}
 */
const verifyToken = async (
  request: VerifyTokenRequest
): Promise<DecodedIdToken> => {
  return new Promise((resolve, reject) => {
    console.log(`[Firebase] Verifying token`);
    getAuth()
      .verifyIdToken(request.idToken)
      .then((response) => {
        console.log(`[Firebase] Successfully verified token.`);
        resolve(response);
      })
      .catch((error) => {
        console.error(`[Firebase] Failed to verify token.`, error);
        reject(
          new ApiErrorResponse(
            error.code,
            'AUTH',
            'AUTH.VERIFY_TOEKN.ERROR',
            error
          )
        );
      });
  });
};

export const FirebaseService = {
  verifyToken,
};
