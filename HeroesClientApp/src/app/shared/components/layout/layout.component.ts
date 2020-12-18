// NG
import { Component, OnInit } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { NotifierService } from "angular-notifier";

// HEROES
import { AuthService } from '@shared/services/auth/auth.service';
import { TrainerSharedService } from '@shared/services/trainer/trainer-shared.service';
import { Events } from '@shared/models/events.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isAutheticated: boolean;
  trainerName: string;
  logout$: Observable<any>;

  private subs = new SubSink();


  constructor(private authService: AuthService,
    private trainerSharedService: TrainerSharedService) { }

  ngOnInit() {
    this.isAutheticated = this.authService.isAuthenticated();
    this.trainerName = this.authService.getName();
    this.subs.sink = this.authService.on(Events.TrainerLoggedIn, 
                                        name => {
                                          this.isAutheticated = this.authService.isAuthenticated();
                                          this.trainerName = this.authService.getName();
                                        });
  }

  logout() {
    this.authService.signOut();
    this.logout$ = this.trainerSharedService.logout();
    this.subs.sink = this.logout$.subscribe(data => console.log('Logout'));
  }

   public ngOnOestroy() {
    this.subs.unsubscribe();
  }
}
