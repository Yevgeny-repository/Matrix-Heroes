// NG
import { Injectable, Injector } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// WEATHER
import { BaseHttpService } from '@core/services/http';
import { TrainerResponseModel } from '@shared/models/trainer-response.model';

@Injectable({providedIn: 'root'})
export class TrainerSharedService extends BaseHttpService {
    
	private login_endpoint: string = 'api/v1/trainer/login/';
	private register_endpoint: string = 'api/v1/trainer/register/';
	private logout_endpoint: string = 'api/v1/trainer/logout/';

    constructor(injector: Injector) {
		super(injector);
	}

	/**
	 * Login
	 */
	public login(name: string, password: string): Observable<TrainerResponseModel>{
		return this.post<TrainerResponseModel>(`${this.login_endpoint}`, 
												{
													name: name,
													password: password
												});
	}
	
	/**
	 * Register
	 */
	public register(name: string, password: string): Observable<TrainerResponseModel>{
		return this.post<TrainerResponseModel>(`${this.register_endpoint}`, 
												{
													name: name,
													password: password
												});
	}
	/**
	 * Logout
	 */
	public logout(): Observable<TrainerResponseModel>{
		return this.post<TrainerResponseModel>(`${this.logout_endpoint}`, 
											null);
    }
}

    