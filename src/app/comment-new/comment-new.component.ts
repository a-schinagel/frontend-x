import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service'
import { Comment } from '../domain/comment';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})

export class CommentNewComponent implements OnInit {

	comment: Comment;
	@Input() jobid: string;

	constructor(private commentService: CommentService) { }

	ngOnInit() { 
		this.comment = new Comment();
	}

	onSubmit() {
		if(!this.isLoggedIn()) { return }

		this.comment.personId = localStorage.getItem('currentUser');
		this.comment.jobId = this.jobid;
		this.commentService.addComment(this.comment).subscribe();
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
