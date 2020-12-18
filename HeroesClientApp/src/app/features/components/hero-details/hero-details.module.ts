// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// HEROES
import { HeroDetailsComponent } from './hero-details.component';

@NgModule({
	declarations: [HeroDetailsComponent],
	exports: [HeroDetailsComponent],
	imports: [
        CommonModule,
        FormsModule,
		HttpClientModule,
		RouterModule
	],
})
export class HeroDetailsModule {
}
