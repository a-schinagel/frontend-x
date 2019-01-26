import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {

	title = 'Karweitje';

	constructor(private authenticationService: AuthenticationService) { }

	ngOnInit() { }

	logout() {
		this.authenticationService.logout().subscribe();
	}

	isLoggedIn(): boolean {
		let currentUser = localStorage.getItem('currentUser');
		let accessToken =  localStorage.getItem('accessToken');

		if(currentUser && accessToken) {
			return true;
		}

		return false;
	}
}