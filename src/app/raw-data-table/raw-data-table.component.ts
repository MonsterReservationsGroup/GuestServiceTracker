import { DateService } from '../services/dates.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SourceData } from '../data';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'raw-data-table',
  templateUrl: './raw-data-table.component.html',
  styleUrls: ['./raw-data-table.component.scss']
})
export class RawDataTableComponent implements OnInit {



  //table management stuff below---------------------------------------------------
  importedData: Array<SourceData> = this.dateService.dateRangeDataSource.getValue();
  displayedColumns: string[] = ['date', 'resID', 'agent', 'source'];
  dataSource = new MatTableDataSource(this.importedData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  //OnInit stuff below--------------------------------------------------------------
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.currentDateRangeData.subscribe(dateRange => {
      this.importedData = dateRange;
      this.refresh();
    })
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource(this.importedData);
    this.dataSource.sort = this.sort;
  }



}
