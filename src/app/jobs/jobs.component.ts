import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../domain/job';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {

	jobs : Job[];

	constructor(private jobService: JobService) {}

	ngOnInit() {
		this.getJobs();
	}

	getJobs(): void {
		this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
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