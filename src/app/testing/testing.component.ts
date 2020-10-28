import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})


export class TestingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  repName = this.randomName();
  resID = this.randomID();

  repName2 = this.randomName();
  resID2 = this.randomID();
  source = this.randomSource();


  randomName() {
    let agentList = ['matt', 'justin', 'april', 'robert', 'rafa', 'nicole', 'garrett']
    let index = Math.floor(Math.random() * agentList.length)
    return agentList[index];
  }

  randomSource() {
    let sourceList = ['Yelp', 'Google', 'Facebook'];
    let index = Math.floor(Math.random() * sourceList.length)
    return sourceList[index];
  }

  randomID() {
    return Math.floor(Math.random() * 100000).toString();
  }


  submitForm() {
    this.router.navigate(['/sent'], {
      queryParams: {
        date: randomDate(),
        agent: this.repName,
        resID: this.resID
      }
    });
  }

  submitForm2() {
    this.router.navigate(['/home', {
      date: randomDate(),
      agent: this.repName2,
      resID: this.resID2,
      source: this.source,
      type: 'consumer'

    }
    ])
  }

  ngOnInit(): void {
  }

}

export function randomDate() {
  let startDate = new Date(2020, 9, 1)
  let endDate = new Date(2020, 9, 28);
  return new Date(startDate.getTime() + (Math.random() * (endDate.getTime() - startDate.getTime())));
}