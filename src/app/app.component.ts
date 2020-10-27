import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { SourceData, Data } from './data';
import * as _ from 'lodash';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private af: AngularFirestore, private route: ActivatedRoute) {}

	title = 'testProject';

	async redirect() {
		console.log('change is working');
		this.route.queryParams.subscribe(async (val: Data) => {
			const date = new Date().getTime().toString();
			const items = Object.assign({}, val, { date });
			const redirect = addressBook[val.source];
			if (items.type === 'consumer') {
				await this.af
					.collection('surveyData')
					.doc(date)
					.set(items, { merge: true });
				window.location.href = redirect;
			}
		});
	}

	ngOnInit() {
		this.redirect();
	}
}

const addressBook = {
	Facebook: 'https://www.facebook.com',
	Google: 'https://www.google.com',
	Yelp: 'https://www.yelp.com',
};
