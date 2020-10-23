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

import { DataEntryComponent } from './data-entry/data-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';
import { ReportingComponent } from './reporting/reporting.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SummaryTableComponent } from './summary-table/summary-table.component';
import { DateService } from './services/dates.service';
import { RawDataTableComponent } from './raw-data-table/raw-data-table.component';



@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    NavbarComponent,
    DisplayComponent,
    ReportingComponent,
    HomeComponent,
    SummaryTableComponent,
    RawDataTableComponent
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

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'entry',
        component: DataEntryComponent
      },
      {
        path: 'reporting',
        component: ReportingComponent
      },
      {
        path: 'display/:guestName/:agent',
        component: DisplayComponent
      },
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ])
  ],

  providers: [
    MatDatepickerModule,
    DateService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
