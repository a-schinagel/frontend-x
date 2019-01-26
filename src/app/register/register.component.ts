import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Persons } from '../domain/persons';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	persons: Persons;

	constructor(private authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.persons = new Persons();
	}

	onSubmit() {
		this.authenticationService.registerPersons(this.persons).subscribe();
	}

}
