import { BehaviorSubject } from 'rxjs';
import { surveyData } from '../data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  //Managing the date selection elements below----------------------------------------------------------------

  startingDateSource = new BehaviorSubject(new Date(this.defaultStartingDate()));
  currentStartDate = this.startingDateSource.asObservable();

  endingDateSource = new BehaviorSubject(new Date(this.defaultEndingDate()));
  currentEndDate = this.endingDateSource.asObservable();

  changeStartDate(input) {
    this.startingDateSource.next(input);

    let newDateRange = this.updateDateRange();
    this.dateRangeDataSource.next(newDateRange);
  }

  changeEndDate(input) {
    this.endingDateSource.next(input);

    let newDateRange = this.updateDateRange();
    this.dateRangeDataSource.next(newDateRange);
  }

  todaysDate() {
    return new Date().setDate(new Date().getDate() - 1)
  }

  defaultStartingDate() {
    let today = new Date().getDay();
    let modifier;
    switch (today) {
      case 0:
        modifier = -6;
        break;
      case 1:
        modifier = 0;
        break;
      case 2:
        modifier = -1;
        break;
      case 3:
        modifier = -2;
        break;
      case 4:
        modifier = -3;
        break;
      case 5:
        modifier = -4;
        break;
      case 6:
        modifier = -5;
        break;
    }
    return new Date().setDate(new Date().getDate() + modifier);
  }

  defaultEndingDate() {
    let today = new Date().getDay();
    let modifier;
    switch (today) {
      case 0:
        modifier = 0;
        break;
      case 1:
        modifier = 6;
        break;
      case 2:
        modifier = 5;
        break;
      case 3:
        modifier = 4;
        break;
      case 4:
        modifier = 3;
        break;
      case 5:
        modifier = 2;
        break;
      case 6:
        modifier = 1;
        break;
    }
    return new Date().setDate(new Date().getDate() + modifier);
  }

  //managing the dateRangeData variable below----------------------------------------------------------------------

  importedData = surveyData;

  dateRangeDataSource = new BehaviorSubject(this.importedData
    .filter(entry => new Date(entry.date) >= new Date(this.startingDateSource.getValue()))
    .filter(entry => new Date(entry.date) <= new Date(this.endingDateSource.getValue())));

  currentDateRangeData = this.dateRangeDataSource.asObservable();

  updateDateRange() {
    return this.importedData
      .filter(entry => new Date(entry.date) >= new Date(this.startingDateSource.getValue()))
      .filter(entry => new Date(entry.date) <= new Date(this.endingDateSource.getValue()));
  }


  constructor() { }
}
