// NG
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// HEROES
import { LoginScreenModule } from './components/login/login-screen.module';
import { RegisterScreenModule } from './components/register/register-screen.module';
import { HeroesScreenModule } from './components/heroes/heroes-screen.module';
import { HeroDetailsModule } from './components/hero-details/hero-details.module';


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		HeroesScreenModule,
		LoginScreenModule,
		RegisterScreenModule,
		HeroDetailsModule,
	]
})
export class FeatureModule {
}
