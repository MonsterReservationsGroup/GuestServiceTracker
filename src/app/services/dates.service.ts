import { BehaviorSubject } from 'rxjs';
import { sentSurveys } from '../data';
import { ApplicationRef, Injectable, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
let surveyData: Array<any> = [];
let dat = [];

@Injectable({
	providedIn: 'root',
})
export class DateService implements OnInit {
	constructor(private af: AngularFirestore, private app: ApplicationRef) {
		this.af
			.collection('surveyData')
			.valueChanges()
			.pipe(take(1))
			.subscribe(val => {
				dat = val;
			});
	}

	//Managing the date selection elements below----------------------------------------------------------------

	startingDateSource = new BehaviorSubject(
		new Date(this.defaultStartingDate())
	);
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
		return new Date().setDate(new Date().getDate() - 1);
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

	//managing the dateRangeData variable below----------------------------------------------------------------------------------

	dateRangeDataSource = new BehaviorSubject(
		surveyData
			.filter(entry => {
				const date = new Date('***');
				console.log(date);
				return (
					new Date(entry.date) >= new Date(this.startingDateSource.getValue())
				);
			})
			.filter(
				entry =>
					new Date(entry.date) <= new Date(this.endingDateSource.getValue())
			)
			.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
	);

	update(surveyData) {
		return surveyData
			.filter(entry => {
				const date = new Date('***');
				console.log(date);
				return (
					new Date(entry.date) >= new Date(this.startingDateSource.getValue())
				);
			})
			.filter(
				entry =>
					new Date(entry.date) <= new Date(this.endingDateSource.getValue())
			)
			.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
	}

	currentDateRangeData = this.dateRangeDataSource.asObservable();

	updateDateRange() {
		return surveyData
			.filter(
				entry =>
					new Date(entry.date) >= new Date(this.startingDateSource.getValue())
			)
			.filter(
				entry =>
					new Date(entry.date) <= new Date(this.endingDateSource.getValue())
			)
			.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
	}

	// Managing the sentSurveys variable below-------------------------------------------------------------
	importedSentSurveys: Array<any> = sentSurveys;
	sentSurveySource = new BehaviorSubject(
		this.importedSentSurveys
			.filter(
				entry =>
					new Date(entry.date) >= new Date(this.startingDateSource.getValue())
			)
			.filter(
				entry =>
					new Date(entry.date) <= new Date(this.endingDateSource.getValue())
			)
	);

	currentSentSurveys = this.sentSurveySource.asObservable();

	updateSentSurveys() {
		return this.importedSentSurveys
			.filter(
				entry =>
					new Date(entry.date) >= new Date(this.startingDateSource.getValue())
			)
			.filter(
				entry =>
					new Date(entry.date) <= new Date(this.endingDateSource.getValue())
			);
	}
	ngOnInit() {}
}
