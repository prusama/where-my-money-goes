import {CanMatchFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const isAuthenticatedGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return router.createUrlTree(['/auth/login']);
  }

  return true;
};
