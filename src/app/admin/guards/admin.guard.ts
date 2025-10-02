import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastService } from 'sc-angular-toastify';
import { SSafeStorage } from '../../core/service/global/safe-storage/s-safe-storage';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const safeStore = inject(SSafeStorage);
  const toast = inject(ToastService);

  const userDataString = safeStore.getItem('userdata');

  if (!userDataString) {
    router.navigateByUrl('/');
    return false;
  }
  console.log('User Data from Storage:', userDataString);

  const userData = userDataString;

  debugger;

  console.log('User Data from Storage:', userData);

  const allowedRoles = route.data['roles'] as string[];

  if (allowedRoles && allowedRoles.includes(userData.role)) {
    debugger;
    return true;
  } else {
    toast.show('Access denied - Admins only', 'error');
    router.navigateByUrl('/');
    return false;
  }
};
