// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// VENDOR
import { NgxNotifierModule } from 'ngx-notifier';

// WEATHER
import { RegisterScreenComponent } from './register-screen.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [RegisterScreenComponent],
	exports: [RegisterScreenComponent],
	imports: [
        BrowserModule,        
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgxNotifierModule
	],
})
export class RegisterScreenModule {
}
