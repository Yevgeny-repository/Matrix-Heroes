// NG
import { Injectable, Injector } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// WEATHER
import { BaseHttpService } from '@core/services/http';
import { HeroModel } from '@shared/models/hero.model';

@Injectable({providedIn: 'root'})
export class HeroesService extends BaseHttpService {
	private hero_endpoint: string = 'api/v1/heroes/getHero/';
	private heroes_endpoint: string = 'api/v1/heroes/getAll/';
	private train_endpoint: string = 'api/v1/heroes/trainHero/';


	constructor(injector: Injector) {
		super(injector);
	}

	/**
	 * Get Heroes
	 */
	public getHeroes(): Observable<HeroModel[]> {
		return this.get(this.heroes_endpoint, {});
	}

	
	/**
	 * Get Hero
	 */
	public getHero(id: string): Observable<HeroModel[]> {
		return this.get(this.hero_endpoint, {
			id: id,
		});
	}

	/**
	 * TrainHero
	 */
	public trainHero(id: string): Observable<HeroModel>{
		return this.post<HeroModel>(`${this.train_endpoint}`,null,
												{
													id: id,
												});
	}
}
