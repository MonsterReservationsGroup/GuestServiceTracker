import { storedAgents, storedRatings } from '../data';
import { BehaviorSubject } from 'rxjs';
import { SelectControlValueAccessor } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// const dataTransfer = new BehaviorSubject('')
// export const $dataTransfer = dataTransfer.asObservable()


@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {




  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pass() {
    // const { selectedAgent, selectedRating, guestFeedback } = this
    // const data = { selectedAgent, selectedRating, guestFeedback }
    //@ts-ignore
    // dataTransfer.next(data)

    let agent: string = this.selectedAgent;
    console.log('from data entry...')
    console.log('guestName', this.guestName);
    console.log('selectedAgent', agent);

    this.router.navigate([
      '/display',
      this.guestName,
      agent,

    ])
  };


  agents = storedAgents;
  ratings = storedRatings;

  guestName: string = '';
  selectedAgent: HTMLSelectElement = null;


}
