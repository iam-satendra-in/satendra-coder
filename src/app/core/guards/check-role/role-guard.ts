import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SToaster } from '../../service/global/toaster/s-toaster';
import { SSafeStorage } from '../../service/global/safe-storage/s-safe-storage';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toaster = inject(SToaster);
  const safeStore = inject(SSafeStorage);

  const userStr = safeStore.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  const allowedRoles = route.data?.['roles'] as string[];

  if (user && allowedRoles?.includes(user.role)) {
    return true;
  } else {
    // Optional: redirect to not-authorized or login
    toaster.addToast({
      title: "Role",
      message: 'unauthorized access',
      type: 'error'
    })
    router.navigate(['/']);
    return false;
  }
};
