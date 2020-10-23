import { DateService } from '../services/dates.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SourceData } from '../data';

@Component({
  selector: 'raw-data-table',
  templateUrl: './raw-data-table.component.html',
  styleUrls: ['./raw-data-table.component.scss']
})
export class RawDataTableComponent implements OnInit {

  importedData: Array<SourceData> = this.dateService.dateRangeDataSource.getValue();


  //table management stuff below-----------
  displayedColumns: string[] = ['date', 'agent', 'source'];
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

  refresh() {
    this.dataSource = new MatTableDataSource(this.importedData);

  }
}
