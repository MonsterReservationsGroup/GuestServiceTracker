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

  importedData: Array<SourceData> = this.dateService.dateRangeDataSource
    .getValue().sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

  //table management stuff below-----------
  displayedColumns: string[] = ['date', 'resID', 'agent', 'source'];
  dataSource = new MatTableDataSource(this.importedData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //OnInit stuff below-------------
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.currentDateRangeData.subscribe(dateRange => {
      this.importedData = dateRange;
      this.refresh();
    })
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.refresh();
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.importedData);
    this.dataSource.sort = this.sort;
  }
}
