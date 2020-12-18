// NG
import { Component, OnInit } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { NgxNotifierService } from 'ngx-notifier';

// HEROES
import { AuthService } from '@shared/services/auth/auth.service';
import { TrainerSharedService } from '@shared/services/trainer/trainer-shared.service';
import { TrainerResponseModel } from '@shared/models';
import { Router } from '@angular/router';
import { EmitEvent } from '@shared/models/emit-event.model';
import { Events } from '@shared/models/events.model';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public trainerName ='';
  public password ='';

  private subs = new SubSink();
  login$: Observable<any>;

  constructor(
    private authService: AuthService,
    private trainerSharedService: TrainerSharedService,
    private ngxNotifierService: NgxNotifierService,
    private router: Router) { }
    
  ngOnInit() {
  }

  login() {
    let isValid = this.validateModel(); 
    if (isValid) {
      this.login$ = this.trainerSharedService.login(this.trainerName, this.password);
      this.subs.sink = this.login$.subscribe(data => this.trainerSubs(data),
        (error) => this.ngxNotifierService.createToast('Error! Please contact administrator', 'danger')
      );
    } else {
      this.ngxNotifierService.createToast('Please check your name and password', 'danger');
    }
  }
  
  trainerSubs(data: TrainerResponseModel): void {
    if (data.isAuthenticated) {
      this.authService.setTrainerInfo(this.trainerName, 'true');
      this.authService.emit(new EmitEvent(Events.TrainerLoggedIn, data.isAuthenticated));
      this.router.navigate(['/heroes-screen'])
    } else {
      this.ngxNotifierService.createToast(data.message, 'danger');
    }
  }

  validateModel() {
    if ((this.trainerName === '') || (this.password === '')) {
      return false;
    } else {
      return true;
    }
  }

  public ngOnOestroy() {
    this.subs.unsubscribe();
    this.ngxNotifierService.clear();
  }
}
