import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service'
import { Comment } from '../domain/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	comments: Comment[];
	@Input() jobid: string;

	constructor(private commentService: CommentService) { }

	ngOnInit() {
		this.getComments();
	}

	getComments(): void {
		// this.commentService.getCommentsByJobId(this.jobid).subscribe(comments => this.comments = comments);
	}

}
