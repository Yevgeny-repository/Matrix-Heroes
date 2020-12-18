// NG
import { Component, OnInit } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

// HEROES
import { HeroesService } from '@shared/services/heroes/heroes-shared.service';
import { HeroModel } from '@shared/models/hero.model';

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './heroes-screen.component.html',
  styleUrls: ['./heroes-screen.component.scss']
})
export class HeroesScreenComponent implements OnInit {

  heroes: HeroModel[];
  heroes$: Observable<any>;
  private subs = new SubSink();

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes$ = this.heroesService.getHeroes();
    this.subs.sink = this.heroes$.subscribe(data => this.heroes = data);
  }
  
  public ngOnOestroy() {
    this.subs.unsubscribe();
  }
}
