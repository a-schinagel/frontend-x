import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-job-detail',
	templateUrl: './job-detail.component.html',
	styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void { 
		this.getJob();
	}

	getJob(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		console.log(id);
	}
}
