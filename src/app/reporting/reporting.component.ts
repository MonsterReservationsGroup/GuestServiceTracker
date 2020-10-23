
import { NgModel } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DateService as DateService } from '../services/dates.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit, AfterViewInit {


  startingDate: Date;
  endingDate: Date;

  passedDate: Date;
  greetingMessage: string;

  constructor(private dateService: DateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('onInit reached');
    this.route.paramMap
      .subscribe(params => {

        if (params.keys.length === 0) {
          this.passedDate = null;
          this.greetingMessage = 'no parameters received!';
        }
        else {
          this.passedDate = new Date(
            params.get('passedDate'));
          this.greetingMessage = 'You passed a parameter!';
        }
      });
    console.log('received passedDate', this.passedDate);

    this.dateService.currentStartDate
      .subscribe(startDate => this.startingDate = startDate);

    this.dateService.currentEndDate
      .subscribe(endDate => this.endingDate = endDate);
  }

  changeStart(event) {
    let output = new Date(event.value)
    this.dateService.changeStartDate(output);
  }

  changeEnd(event) {
    let output = new Date(event.value)
    this.dateService.changeEndDate(output);
  }

  ngAfterViewInit() {

  }


}

