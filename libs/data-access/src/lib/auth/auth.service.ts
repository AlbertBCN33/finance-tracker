import { inject, Injectable } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  idToken,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  user,
  User,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  auth = inject(Auth);
  user$: Observable<User | null>;
  token$: Observable<string | null>;

  constructor() {
    this.auth.setPersistence(browserSessionPersistence);
    this.user$ = user(this.auth);
    this.token$ = idToken(this.auth);
  }

  register = async (name: string, email: string, password: string) => {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await updateProfile(credential.user, { displayName: name });
    return credential;
  };

  resetPassword = async (email: string) =>
    sendPasswordResetEmail(this.auth, email);

  login = async (email: string, password: string) =>
    signInWithEmailAndPassword(this.auth, email, password);

  loginWithGoogle = async () =>
    signInWithPopup(this.auth, new GoogleAuthProvider());

  logout = async () =>
    signOut(this.auth).then(() => {
      sessionStorage.clear();
    });

  get currentUser() {
    return this.auth.currentUser;
  }
}
