import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// HEROES
import { AuthService } from '@shared/services/auth/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login-screen']);
      return false;
    }
    return true;
  }
}