import {CanMatchFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const isAuthenticatedGuard: CanMatchFn = () => {
  const router = inject(Router);
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return router.createUrlTree(['/auth/login']);
  }

  return true;
};
