import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class UnauthorizedInterceptorService {

	constructor (private router: Router) { };

	intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
		return <any> next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if(event instanceof HttpResponse) {
					return event;
				}
			}),
			catchError(this.handleError('UnauthorizedInterceptorService',[]))
		);
	}

	private handleError<T> (operation = 'operation', result?: T){
		return(error: any): Observable<T> => {
			console.error(error);
			if (error instanceof HttpErrorResponse) {
				if (error.status === 401) {
					this.router.navigate(['/login']);
				}
			}

			return of (result as T);
		}
	}
}