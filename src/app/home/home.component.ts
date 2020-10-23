import { data, storedAgents, surveyOptions } from '../data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  oldDate: Date = new Date(2020, 1, 1);
  newDate: Date = new Date();
  testObject = { "date": "2020-03-17T05:10:29.685Z", "agent": "Justin", "source": "Facebook" }
  agentNames: Array<any> = storedAgents.map(agent => agent.agent);

  dateString = "2020-08-17T18:45:26.472Z";
  testDate = new Date(this.dateString);
  dataArray = this.createArray();


  dataEntry() {
    return {
      date: this.randomDate(),
      agent: this.randomAgent(),
      source: this.randomSource(),
      rating: this.randomRating()
    }

  }

  createArray() {
    let output = [];
    for (let i = 0; i < 1; i++) {
      output.push(this.dataEntry());
    }
    return output;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.testDate);

  }

  randomDate() {
    let start = this.oldDate;
    let end = this.newDate;
    return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
  }

  randomAgent() {
    let random = Math.floor(Math.random() * (this.agentNames.length - 1));
    return this.agentNames[random];
  }

  randomSource() {
    let random = Math.floor(Math.random() * surveyOptions.length);
    return surveyOptions[random];

  }

  randomRating() {
    return Math.floor(Math.random() * 5) + 1;
  }

}
