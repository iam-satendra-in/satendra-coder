import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const iauthInterceptor: HttpInterceptorFn = (req, next) => {
  
  const route = inject(Router);
  const token = sessionStorage.getItem('token');
  if (token) {
   const authreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authreq);
  }
  sessionStorage.clear();
  route.navigate(['/login']);
  return next(req);
};
