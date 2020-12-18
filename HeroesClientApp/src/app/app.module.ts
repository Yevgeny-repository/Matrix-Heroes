// NG
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// HEROES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@shared/components/layout';
import { FeatureModule } from './features';
import { AuthService } from '@shared/services/auth/auth.service';
import { AuthGuardService } from '@core/services/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FeatureModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

