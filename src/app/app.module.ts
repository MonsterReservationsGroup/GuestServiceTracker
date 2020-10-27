import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';
import { ReportingComponent } from './reporting/reporting.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SummaryTableComponent } from './summary-table/summary-table.component';
import { DateService } from './services/dates.service';
import { RawDataTableComponent } from './raw-data-table/raw-data-table.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DisplayComponent,
		ReportingComponent,

		SummaryTableComponent,
		RawDataTableComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatButtonToggleModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatSelectModule,
		MatInputModule,
		FormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTableModule,
		MatSortModule,
		AngularFireModule.initializeApp({
			apiKey: 'AIzaSyChhQRVh-fwiMQQekIEj6D0oWbj4_8618w',
			authDomain: 'guestservicestracker.firebaseapp.com',
			databaseURL: 'https://guestservicestracker.firebaseio.com',
			projectId: 'guestservicestracker',
			storageBucket: 'guestservicestracker.appspot.com',
			messagingSenderId: '237171382398',
			appId: '1:237171382398:web:328a7a06bcd49bd354202f',
			measurementId: 'G-4QL2Q82D0R',
		}),
		AngularFirestoreModule,
	],

	providers: [MatDatepickerModule, DateService],

	bootstrap: [AppComponent],
})
export class AppModule {}
