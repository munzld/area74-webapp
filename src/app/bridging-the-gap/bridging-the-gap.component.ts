import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from '../city/city.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { City } from '../city/city';

@Component({
  selector: 'app-bridging-the-gap',
  templateUrl: './bridging-the-gap.component.html',
  styleUrls: ['./bridging-the-gap.component.scss', '../shared/material/material.scss']
})
export class BridgingTheGapComponent implements OnInit {
  displayedColumns: string[] = ['city', 'state', 'district'];
  dataSource: MatTableDataSource<City>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getCities();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {
      this.dataSource = new MatTableDataSource(cities);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
