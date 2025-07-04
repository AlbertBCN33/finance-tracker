import { inject, Injectable } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  GoogleAuthProvider,
  idToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
