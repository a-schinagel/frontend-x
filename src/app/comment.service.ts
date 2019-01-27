import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from './domain/comment';

const httpOptions ={
	headers : new HttpHeaders ({ 'Content-type':'application/json' })
};

@Injectable({ providedIn: 'root' })

export class CommentService {

	private url = 'https://loopback-group5-toolchain.eu-de.mybluemix.net' + '/api/Comments';

	constructor(private http: HttpClient) { }

	// getComments(): Observable<Comments[]> {
	// 	return this.http.get<Comments[]>(this.url)
	// 		.pipe(
	// 			tap(_ => console.log("Get Comments")),
	// 			catchError(this.handleError<Comments[]>('get Comments'))
	// 		);
	// }

	// getCommentsByJobId(job: string): Observable<Comments[]> {
	// 	const urlWithFilter = this.url + '?filter={"jobId":"' + job + '", "include":"person"}';
	// 	return this.http.get<Comments[]>(urlWithFilter)
	// 		.pipe(
	// 			tap(comments => console.log(comments)),
	// 			catchError(this.handleError<Comments[]>('get Comments'))
	// 		);
	// }

	addComment(comment: Comment): Observable<Comment> {
		return this.http.post<Comment>(this.url, comment, httpOptions).pipe(
			tap((comment: Comment) => console.log(comment)),
			catchError(this.handleError<Comment>('Add comment'))
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
