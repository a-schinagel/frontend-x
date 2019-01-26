import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service'
import { Job } from '../domain/job';

@Component({
	selector: 'app-job-detail',
	templateUrl: './job-detail.component.html',
	styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {

	public id: string
	public job: Job;

	constructor(private route: ActivatedRoute, private jobService: JobService) { }

	ngOnInit(): void { 
		this.id = this.route.snapshot.paramMap.get('id');
		this.getJob();
	}

	getJob(): void {
		this.jobService.getJob(this.id).subscribe(job => this.job = job);
	}
}
