import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Persons } from '../domain/persons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	persons: Persons;

	constructor(private authenticationService: AuthenticationService) { }

	ngOnInit() { 
		this.persons = new Persons();
	}

	onSubmit() {
		this.authenticationService.login(this.persons).subscribe();
	}

}
