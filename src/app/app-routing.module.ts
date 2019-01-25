import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { JobsComponent }  from './jobs/jobs.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';

const routes: Routes = [
	{ path: '', component: JobsComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}