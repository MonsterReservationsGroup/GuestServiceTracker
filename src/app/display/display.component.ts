import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { $dataTransfer } from '../data-entry/data-entry.component'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }




  ngOnInit(): void {
    // // $dataTransfer.subscribe(val => console.log(val))
    // console.log('onInit reached');
    // this.route.paramMap
    //   .subscribe(params => {

    //     if (params.keys.length === 0) {
    //       this.guestName = 'Test Guest';
    //       this.agent = 'Test Agent';
    //     }
    //     else {
    //       this.guestName = params.get('guestName');
    //       this.agent = params.get('agent') as string;
    //     }

    //     this.summary = `${this.guestName}, Thank you for speaking with ${this.agent} today! 
    //     Please leave us a survey telling others about your experience.  Thanks! `;
    //   })
    let passedDate = new Date();
    console.log('sending passedDate', passedDate);
    this.router.navigate([`/reporting/${passedDate}`]);
  }

}
