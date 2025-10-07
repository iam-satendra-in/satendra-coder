import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SSafeStorage } from '../../service/global/safe-storage/s-safe-storage';

export const iauthInterceptor: HttpInterceptorFn = (req, next) => {
  // debugger;
  const route = inject(Router);
  const safe = inject(SSafeStorage);
  const token = safe.getItem('userdata');
  if (token?.token) {
    const authreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token?.token}`,
      },
    });
    return next(authreq);
  }
  safe.removeItem('userdata');
  route.navigate(['/auth/login']);
  return next(req);
};
