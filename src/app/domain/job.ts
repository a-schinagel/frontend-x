export class Job {
	id: string;
	personId: string;
	title: string;
	description: string;
	location: string;
	start_time: string;
	end_time: string;
	price: number;
	vacant: boolean;
	completed: boolean;
	job: object;
	person: object;
	driver_license_required: boolean;
}