import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);

  if (auth.currentUser) return true;
  return router.createUrlTree(['/login']);
};
