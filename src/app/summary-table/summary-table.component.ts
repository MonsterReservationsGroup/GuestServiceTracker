import { storedAgents, surveyData } from '../data';
import { DateService } from '../services/dates.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface SummaryElement {
  agent: string,
  google: number,
  yelp: number,
  facebook: number,
  total: number
}

@Component({
  selector: 'summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit, AfterViewInit {

  startingDate: Date = new Date(this.dateService.startingDateSource.getValue());

  endingDate: Date = new Date(this.dateService.endingDateSource.getValue());
  agentList = storedAgents.map(a => a.agent);

  dateRangeData = this.dateService.dateRangeDataSource.value;

  displayedColumns: string[] = ['agent', 'google', 'yelp', 'facebook', 'total'];

  dataSource = new MatTableDataSource(this.summarizeData());

  //Summarize Data functions below--------------------------------------------------------------------------
  summarizeData() {
    let output = this.createSummaryArray();
    let totalElement = this.getTotalElement();
    output.push(totalElement);
    return output;
  }

  createSummaryArray() {
    let output = [];
    for (let agent of this.agentList) {
      let newElement: SummaryElement = {
        agent: agent,
        google: this.getSourceCount(agent, 'Google'),
        yelp: this.getSourceCount(agent, 'Yelp'),
        facebook: this.getSourceCount(agent, 'Facebook'),
        total: this.dateRangeData
          .filter(entry => entry.agent === agent)
          .length
      }
      output.push(newElement);
    }
    return output;
  }

  getSourceCount(agent, source) {
    let localArray = this.dateRangeData
      .filter(entry => entry.agent === agent)
      .filter(agent => agent.source === source);
    let outputNumber = localArray.length;
    return outputNumber;
  }

  getTotalElement() {
    let totalElement: SummaryElement = {
      agent: 'Total:',
      google: this.getTotalCount('Google'),
      yelp: this.getTotalCount('Yelp'),
      facebook: this.getTotalCount('Facebook'),
      total: (this.dateRangeData as Array<any>).length
    }
    return totalElement;
  }

  getTotalCount(source) {
    let localArray = this.dateRangeData
      .filter(agent => agent.source === source);
    let outputNumber = localArray.length;
    return outputNumber;

  }

  //OnInit stuff below----------------------------------------------------------------------------------------
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.currentStartDate
      .subscribe(startDate => {
        this.startingDate = startDate;
        this.refresh();
      });

    this.dateService.currentEndDate
      .subscribe(endDate => {
        this.endingDate = endDate;
        this.refresh();
      });

    this.dateService.currentDateRangeData
      .subscribe(dateRange => {
        this.dateRangeData = dateRange;
        this.refresh();
      })

    this.refresh();

    console.log('date range data:', this.dateRangeData);

  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.summarizeData());
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.refresh();
    this.dataSource.sort = this.sort;
  }

}