
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
export class ReportingComponent implements OnInit {

  //---Date Picker management stuff-------------------------------------------------------------------------------
  startingDate: Date;
  endingDate: Date;

  changeStart(event): void {
    let output = new Date(event.value)
    this.dateService.changeStartDate(output);
  }

  changeEnd(event): void {
    let output = new Date(event.value)
    this.dateService.changeEndDate(output);
  }



  //OnInit stuff--------------------------------------------------------------------------------------------------------
  constructor(private dateService: DateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('onInit reached');
    this.route.paramMap
      .subscribe(params => {

        if (params.keys.length === 0) {
          console.log('no parameters received!');
        }
        else {
          console.log('You passed a parameter:', params);
        }
      });

    this.dateService.currentStartDate
      .subscribe(startDate => this.startingDate = startDate);

    this.dateService.currentEndDate
      .subscribe(endDate => this.endingDate = endDate);
  }



}

