import { Injectable } from '@angular/core';
import { EmitEvent } from '@shared/models/emit-event.model';
import { Events } from '@shared/models/events.model';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private subject$ = new Subject();

  constructor() {}

  public isAuthenticated(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated === 'true';
  }

  public getName(): string {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
        return localStorage.getItem('name');
    } else {
        return null;
    }
  }

  public setTrainerInfo(name: string, isAuthenticated: string): void {
    localStorage.setItem('name', name);
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }

  public signOut(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('isAuthenticated');
  }


  on(event: Events, action: any): Subscription {
       return this.subject$
            .pipe(
                  filter((e: EmitEvent) => e.name === event),
                  map((e: EmitEvent) => e.value)
                )
            .subscribe(action);
  }

  emit(event: EmitEvent) {
      this.subject$.next(event);
  }
}