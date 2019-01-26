import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent }  from './jobs/jobs.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';

const routes: Routes = [
	{ path: '', component: JobsComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}