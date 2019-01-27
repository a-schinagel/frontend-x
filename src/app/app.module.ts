import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { 
	AccordionModule, 
	AlertModule, 
	ButtonsModule, 
	CarouselModule, 
	CollapseModule,
	BsDatepickerModule,
	BsDropdownModule,
	ModalModule,
	PaginationModule,
	PopoverModule,
	ProgressbarModule,
	RatingModule,
	SortableModule,
	TabsModule,
	TimepickerModule,
	TooltipModule,
	TypeaheadModule
} from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './authentication.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';
import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobNewComponent } from './job-new/job-new.component';
import { CommentNewComponent } from './comment-new/comment-new.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
	declarations: [AppComponent, JobsComponent, RegisterComponent, LoginComponent, JobDetailComponent, LogoutComponent, JobNewComponent, CommentNewComponent, CommentComponent], 
	imports: [
		BrowserModule,
		FormsModule, 
		AccordionModule, 
		AlertModule, 
		ButtonsModule, 
		CarouselModule, 
		CollapseModule,
		BsDatepickerModule,
		BsDropdownModule,
		ModalModule,
		PaginationModule,
		PopoverModule,
		ProgressbarModule,
		RatingModule,
		SortableModule,
		TabsModule,
		TimepickerModule,
		TooltipModule,
		TypeaheadModule,
		AppRoutingModule,
		HttpClientModule,
	], 
	providers: [AuthenticationService, 
		{ 
			provide: HTTP_INTERCEPTORS,
			useClass: AuthorizationInterceptorService,
			multi: true
		},
		{ 
			provide: HTTP_INTERCEPTORS,
			useClass: UnauthorizedInterceptorService,
			multi: true
		}
	], 
	bootstrap: [AppComponent]
})

export class AppModule { }
