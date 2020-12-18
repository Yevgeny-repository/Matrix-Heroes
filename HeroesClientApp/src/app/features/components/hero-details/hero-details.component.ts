// NG
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// VENDOR
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { switchMap } from 'rxjs/operators';

// HERO
import { HeroesService } from '@shared/services/heroes/heroes-shared.service';
import { HeroModel } from '@shared/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  selectedHero: HeroModel | unknown;
  selectedId: string
  hero: HeroModel;
  hero$: Observable<any>;
  private subs = new SubSink();

  constructor(private route: ActivatedRoute,
    private heroService: HeroesService) { }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');

    this.subs.sink = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.heroService.getHero(this.selectedId);
      })
    ).subscribe(data => {
      console.log(data);
      this.selectedHero = data
    });
  }
  
  public trainHero(hero: HeroModel) {
    this.subs.sink = this.heroService.trainHero(hero.id)
                        .subscribe(data => this.traineHeroSubs(data));
  }

  traineHeroSubs(data: HeroModel): void {
    this.selectedHero = data;
    console.log(this.selectedHero);
  }

  public ngOnOestroy() {
    this.subs.unsubscribe();
  }
}
