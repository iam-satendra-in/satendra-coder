import { HttpInterceptorFn } from '@angular/common/http';
import { SLoaders } from '../../service/global/loaders/s-loaders';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

export const iloadersInterceptor: HttpInterceptorFn = (req, next) => {
 const loaderService = inject(SLoaders);

  // Skip loader if request has 'NoLoader' header
  if (req.headers.has('NoLoader')) {
    return next(req);
  }

  // Show loader before request
  loaderService.show();

  return next(req).pipe(
    finalize(() => {
      // Hide loader after response (success or error)
      loaderService.hide();
    })
  );
};