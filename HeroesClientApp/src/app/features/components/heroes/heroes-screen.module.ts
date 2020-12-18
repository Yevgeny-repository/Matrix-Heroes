// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// HEROES
import { HeroesScreenComponent } from './heroes-screen.component';

@NgModule({
	declarations: [HeroesScreenComponent],
	exports: [HeroesScreenComponent],
	imports: [
        CommonModule,
        FormsModule,
		HttpClientModule,
		RouterModule 
	],
})
export class HeroesScreenModule {
}
