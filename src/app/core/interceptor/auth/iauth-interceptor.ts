import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SSafeStorage } from '../../service/global/safe-storage/s-safe-storage';

export const iauthInterceptor: HttpInterceptorFn = (req, next) => {
  const route = inject(Router);
  const safe = inject(SSafeStorage);
  const token = safe.getItem('token');
  if (token) {
    const authreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authreq);
  }
  safe.removeItem('token');
  route.navigate(['/login']);
  return next(req);
};
