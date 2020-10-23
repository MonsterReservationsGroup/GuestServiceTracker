import { storedAgents, surveyData } from '../data';
import { NgModel } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DateService as DateService } from '../services/dates.service';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit, AfterViewInit {


  startingDate: Date;
  endingDate: Date;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
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

