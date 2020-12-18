import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/services/guards/auth-guard.service';
import { HeroDetailsComponent } from './features/components/hero-details/hero-details.component';
import { HeroesScreenComponent } from './features/components/heroes/heroes-screen.component';
import { LoginScreenComponent } from './features/components/login/login-screen.component';
import { RegisterScreenComponent } from './features/components/register/register-screen.component';


const routes: Routes = [
  { 
    path: 'heroes-screen',
    component: HeroesScreenComponent,
    canActivate: [AuthGuardService] 
  },
  { 
    path: 'hero-details/:id',
    component: HeroDetailsComponent,
    canActivate: [AuthGuardService] 
  },
  { path: 'register-screen', component: RegisterScreenComponent },
  { path: 'login-screen', component: LoginScreenComponent },
  { path: '',   redirectTo: '/heroes-screen', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
