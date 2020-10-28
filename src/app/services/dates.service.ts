import { BehaviorSubject } from 'rxjs';
import { sentSurveysExport, SourceData, SurveySent } from '../data';
import { ApplicationRef, Injectable, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root',
})
export class DateService implements OnInit {

  surveyData: Array<SourceData> = [];
  sentSurveys: Array<SurveySent> = [];


  refreshData() {
    console.log('refreshData reached');
    return new Promise(r => {
      this.af
        .collection('surveyData')
        .valueChanges()
        .pipe(take(1))
        .subscribe(val => {
          this.surveyData = val as Array<SourceData>;

          let newDateRange = this.updateDateRange();
          this.dateRangeDataSource.next(newDateRange);
        });

      this.af
        .collection('sentSurvey')
        .valueChanges()
        .pipe(take(1))
        .subscribe(val => {
          this.sentSurveys = val as Array<SurveySent>;

          let newSurveys = this.updateSentSurveys();
          this.sentSurveySource.next(newSurveys);
        });
    })
  }

  constructor(private af: AngularFirestore, private app: ApplicationRef) { }


  //Managing the date selection elements below----------------------------------------------------------------

  startingDateSource = new BehaviorSubject(
    new Date(this.defaultStartingDate())
  );
  currentStartDate = this.startingDateSource.asObservable();

  endingDateSource = new BehaviorSubject(new Date(this.defaultEndingDate()));
  currentEndDate = this.endingDateSource.asObservable();

  changeStartDate(input) {
    console.log('changeStartDate reached');
    this.startingDateSource.next(input);

    let newDateRange = this.updateDateRange();
    this.dateRangeDataSource.next(newDateRange);

    let newSurveys = this.updateSentSurveys();
    this.sentSurveySource.next(newSurveys);
  }

  changeEndDate(input) {
    console.log('changeEndDate reached');
    this.endingDateSource.next(input);

    let newDateRange = this.updateDateRange();
    this.dateRangeDataSource.next(newDateRange);

    let newSurveys = this.updateSentSurveys();
    this.sentSurveySource.next(newSurveys);
  }

  defaultStartingDate() {
    console.log('defaultStartingDate reached');
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
    console.log('defaultEndingDate reached');
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

  //managing the dateRangeData variable below----------------------------------------------------------------------------------

  dateRangeDataSource = new BehaviorSubject([]);

  currentDateRangeData = this.dateRangeDataSource.asObservable();


  updateDateRange() {
    console.log('updateDateRange reached');

    return this.surveyData
      .filter(
        entry => {
          let compareStartDate = new Date(this.dateFromFirebase(entry.date));
          let startingDate = new Date(this.startingDateSource.getValue());
          return compareStartDate >= startingDate;
        })
      .filter(
        entry => {
          let compareEndDate = new Date(this.dateFromFirebase(entry.date));
          let endingDate = new Date(this.endingDateSource.getValue());
          return compareEndDate <= endingDate;
        })
      .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));

  }


  dateFromFirebase(input) {
    console.log('dateFromFireBase reached');
    return firebase.firestore.Timestamp.fromMillis(input as unknown as number).toDate();
  }

  // Managing the sentSurveys variable below-------------------------------------------------------------

  sentSurveySource = new BehaviorSubject([]);

  currentSentSurveys = this.sentSurveySource.asObservable();

  updateSentSurveys() {
    console.log('updateSentSurveys reached');
    return this.sentSurveys
      .filter(
        entry =>
          new Date(entry.date) >= new Date(this.startingDateSource.getValue())
      )
      .filter(
        entry =>
          new Date(entry.date) <= new Date(this.endingDateSource.getValue())
      );

  }
  ngOnInit() {

  }



}
