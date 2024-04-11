import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('userId');
  const router = inject(Router);
  
  if (token){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};

export const loginUserGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('userId');
  const router = inject(Router);
  
  if (token){
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }

};
