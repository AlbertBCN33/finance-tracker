import { FirebaseService } from './firebase.service';

class AuthService {
  /**
   * Login: Google
   *
   * @description Login using the Google account
   * @async
   * @function loginGoogle
   * @param {LoginGoogleRequest} request Request parameters
   * @return {Promise<User>}
   */
  loginGoogle = async (request: LoginGoogleRequest): Promise<User> => {
    const res = await FirebaseService.loginGoogle(request);
    return res.result;
  };

  /**
   * Login: User
   *
   * @description Login using Email + Password
   * @async
   * @function loginUser
   * @param {LoginUserRequest} request Request parameters
   * @return {Promise<User>}
   */
  loginUser = async (request: LoginUserRequest): Promise<User> => {
    const res = await FirebaseService.loginUser(request);
    return res.result;
  };
}

export default AuthService;
