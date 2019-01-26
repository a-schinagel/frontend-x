import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Job } from './domain/job';

const httpOptions ={
	headers : new HttpHeaders ({ 'Content-type':'application/json' })
};

@Injectable({ providedIn: 'root' })

export class JobService {

	private url = 'http://localhost:3000' + '/api/Jobs';

	constructor(private http: HttpClient) { }

	getJobs(): Observable<Job[]> {
		return this.http.get<Job[]>(this.url)
			.pipe(
				tap(_ => console.log("Get Jobs")),
				catchError(this.handleError<Job[]>('get Jobs'))
			);
	}

	getJob(id: number): Observable<Job> {

	}

	addJob(job: Job): Observable<Job> {
		return this.http.post<Job>(this.url, job, httpOptions).pipe(
			tap((job: Job) => console.log(job)),
			catchError(this.handleError<Job>('Add job'))
		);
	}

	deleteJob(job: Job | number): Observable<Job> {

	}

	private handleError<T> (operation = 'operation', result?: T){
		return(error: any): Observable<T> => {
			console.error(error);
			//return the empty result so the application keeps running
			return of (result as T);
		}
	}
}
