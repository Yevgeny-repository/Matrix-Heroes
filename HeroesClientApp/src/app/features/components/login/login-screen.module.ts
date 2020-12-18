// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// VENDOR
import { NgxNotifierModule } from 'ngx-notifier';

// HEROES
import { LoginScreenComponent } from './login-screen.component';

@NgModule({
	declarations: [LoginScreenComponent],
	exports: [LoginScreenComponent],
	imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgxNotifierModule
	],
})
export class LoginScreenModule {
}
