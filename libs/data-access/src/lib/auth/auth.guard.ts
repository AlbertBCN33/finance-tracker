import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { from, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);

  return from(auth.authState).pipe(
    map((user) => {
      if (user) return true;
      return router.createUrlTree(['/auth/login']);
    })
  );
};
