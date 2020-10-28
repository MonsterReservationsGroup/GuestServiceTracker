import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportingComponent } from './reporting/reporting.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
	{
		path: 'reporting/:passedDate',
		component: ReportingComponent,
	},
	{
		path: 'reporting',
		component: ReportingComponent,
	},
	{
		path: 'sent',
		component: DisplayComponent,
	},
	{
		path: 'testing',
		component: TestingComponent,
	},
	{
		path: 'home',
		component: AppComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
