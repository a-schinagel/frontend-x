import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
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
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
	declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent, JobsComponent, RegisterComponent, LoginComponent, JobDetailComponent], 
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
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
	], 
	providers: [], 
	bootstrap: [AppComponent]
})

export class AppModule { }
