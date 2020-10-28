import { SurveySent } from '../data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
// import { $dataTransfer } from '../data-entry/data-entry.component'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private af: AngularFirestore) { }


  ngOnInit(): void {

    this.route.queryParams.subscribe(async params => {
      let docDate = new Date().toString();
      let entry = {
        date: docDate,
        agent: params.agent,
        resID: params.resID
      }

      await this.af
        .collection('sentSurvey')
        .doc(docDate)
        .set(entry, { merge: true });
    })

  }

}

