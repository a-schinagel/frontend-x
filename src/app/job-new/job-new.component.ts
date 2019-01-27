import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service'
import { Job } from '../domain/job';

@Component({
	selector: 'app-job-new',
	templateUrl: './job-new.component.html',
	styleUrls: ['./job-new.component.css']
})

export class JobNewComponent implements OnInit {

	job: Job;

	constructor(private jobService: JobService) { }

	ngOnInit() {
		this.job = new Job();
	}

	onSubmit() {
		if(!this.isLoggedIn()) { return }

		const f = this.job.start_time.split("/");
		this.job.price = this.job.price;
		this.job.personId = localStorage.getItem('currentUser');
		this.job.start_time = new Date(parseInt(f[2]), parseInt(f[1])-1, parseInt(f[0])).toString();
		this.job.end_time = new Date().toString();
		this.job.vacant = true;
		this.job.completed = false;

		console.log(this.job);
		// this.jobService.addJob(this.job).subscribe();
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