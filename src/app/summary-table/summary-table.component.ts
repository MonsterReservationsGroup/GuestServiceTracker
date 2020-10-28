
import { DateService } from '../services/dates.service';
import { surveyData, SurveySent, sentSurveysExport } from '../data';
import { Observable } from 'rxjs';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface SummaryElement {
  agent: string,
  google: number,
  yelp: number,
  facebook: number,
  total: number,
  sent: number
}

@Component({
  selector: 'summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit, AfterViewInit {

  dateRangeData;
  sentSurveys = this.dateService.updateSentSurveys();
  agentList;
  dataSource;
  totalElement;


  //Managing the Table Output---------------------------------------------------------------------------
  displayedColumns: string[] = ['agent', 'google', 'yelp', 'facebook', 'total', 'sent'];
  getAgentList(): Array<any> {
    console.log('date range data:', this.dateRangeData);
    let outputArray = [];

    let agentArray = this.dateRangeData.map(entry => entry.agent);
    console.log('agentArray', agentArray);

    for (let agent of agentArray)
      if (!outputArray.includes(agent))
        outputArray.push(agent);
    return outputArray;


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  //Summarize Data functions below--------------------------------------------------------------------------
  summarizeData(): Array<any> {
    this.totalElement = this.getTotalElement();
    return this.createSummaryArray();
  }

  createSummaryArray(): Array<any> {
    let output = [];
    for (let agent of this.agentList) {
      let newElement: SummaryElement = {
        agent: agent,
        google: this.getSourceCount(agent, 'Google'),
        yelp: this.getSourceCount(agent, 'Yelp'),
        facebook: this.getSourceCount(agent, 'Facebook'),
        total: this.dateRangeData
          .filter(entry => entry.agent === agent)
          .length,
        sent: this.sentSurveys
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
      .filter(agent => agent.source.toLowerCase() === source.toLowerCase());
    let outputNumber = localArray.length;
    return outputNumber;
  }

  getTotalElement() {
    let totalElement: SummaryElement = {
      agent: 'Total:',
      google: this.getTotalCount('Google'),
      yelp: this.getTotalCount('Yelp'),
      facebook: this.getTotalCount('Facebook'),
      total: (this.dateRangeData as Array<any>).length,
      sent: this.sentSurveys.length
    }
    return totalElement;
  }

  getTotalCount(source) {
    let localArray = this.dateRangeData
      .filter(agent => agent.source.toLowerCase() === source.toLowerCase());
    let outputNumber = localArray.length;
    return outputNumber;

  }

  //OnInit stuff below----------------------------------------------------------------------------------------

  setupData() {
    // await this.dateService.refreshDat();
    // this.dateRangeData = this.dateService.dateRangeDataSource.getValue();
    // this.sentSurveys = this.dateService.updateSentSurveys();
    // this.agentList = this.getAgentList();
    // this.dataSource = new MatTableDataSource(this.summarizeData());
    // this.totalElement = this.getTotalElement();
    // this.refresh();
    this.dateService.refreshData().then(() => {
      this.dateRangeData = this.dateService.dateRangeDataSource.getValue();
      this.sentSurveys = this.dateService.updateSentSurveys();
      this.agentList = this.getAgentList();
      this.dataSource = new MatTableDataSource(this.summarizeData());
      this.totalElement = this.getTotalElement();
      this.refresh();
    });

  }

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    console.log('onInit reached in summary table');
    this.setupData();
    this.dateService.currentDateRangeData
      .subscribe(dateRange => {
        this.dateRangeData = dateRange;
        console.log('date range data from the onInit subscription', this.dateRangeData);
        this.refresh();
      })

    this.dateService.currentSentSurveys
      .subscribe(surveys => {
        this.sentSurveys = surveys;
        console.log('sent surveys from the onInit subscription');
        this.refresh();
      })


    console.log('agent list:', this.agentList);
    console.log('summary table onInit completed');

  }

  refresh() {
    this.agentList = this.getAgentList();
    this.dataSource = new MatTableDataSource(this.summarizeData());
    this.dataSource.sort = this.sort;
    this.sentSurveys = this.dateService.updateSentSurveys();

  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.refresh();
  }

}