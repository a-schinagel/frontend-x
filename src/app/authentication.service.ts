import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Persons } from './domain/persons';
import { environment } from '../environments/environment';

const httpOptions ={
	headers : new HttpHeaders ({ 'Content-type':'application/json' })
};

interface LoginOutput{
	id: string,
	ttl: number,
	created: string,
	userId: string
}

@Injectable({
	providedIn: 'root'
})

export class AuthenticationService {

	private url = environment.local_apiBaseUrl + '/api/People';

	constructor(private http: HttpClient) { }

	registerPersons(persons: Persons):Observable<Persons>{
		return this.http.post<Persons>(this.url, persons, httpOptions).pipe(
			tap((persons: Persons) => console.log('Created person with id =' + persons.id)),
			catchError(this.handleError<Persons>('register Persons'))
		);
	}

	login(persons: Persons):Observable<any> {
		return this.http.post<LoginOutput>(this.url + "/login", persons, httpOptions).pipe(
			map(loginOutput=>{
				//login succesful
				if(loginOutput.id && loginOutput.userId) {
					localStorage.setItem('currentUser',loginOutput.userId);
					localStorage.setItem('accessToken',loginOutput.id);
				}
				return loginOutput;
			}),
			catchError(this.handleError<Persons>('login Persons'))
		);
	}

	logout():Observable<any> {
		let accessToken = localStorage.getItem('accessToken');
		return this.http.post(this.url + "/logout", httpOptions).pipe(
			tap(() => {
				localStorage.removeItem('currentUser');
				localStorage.removeItem('accessToken');
				console.log("succesfully logged out user");
			}),
			catchError(this.handleError('logout Persons'))
		);
	}


	private handleError<T> (operation = 'operation', result?: T){
		return(error: any): Observable<T> => {
			console.error(error);
			//return the empty result so the application keeps running
			return of (result as T);
		}
	}
}
