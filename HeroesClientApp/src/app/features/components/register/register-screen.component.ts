// NG
import { Component, OnInit } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { NgxNotifierService } from 'ngx-notifier';

// HEROES
import { AuthService } from '@shared/services/auth/auth.service';
import { TrainerSharedService } from '@shared/services/trainer/trainer-shared.service';
import { TrainerResponseModel } from '@shared/models/trainer-response.model';
import { Router } from '@angular/router';
import { EmitEvent } from '@shared/models/emit-event.model';
import { Events } from '@shared/models/events.model';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  public trainerName = '';
  public password = '';

  private subs = new SubSink();
  reguster$: Observable<any>;

  constructor(
    private authService: AuthService,
    private trainerSharedService: TrainerSharedService,
    private ngxNotifierService: NgxNotifierService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    let isValid = this.validateModel(); 
    if (isValid) {
      this.reguster$ = this.trainerSharedService.register(this.trainerName, this.password);
      this.subs.sink = this.reguster$.subscribe(data => this.trainerSubs(data),
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
