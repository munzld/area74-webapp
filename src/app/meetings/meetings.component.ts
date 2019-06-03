import { Component, OnInit, ViewChild } from '@angular/core';
import { DistrictService } from '../district/district.service';
import { MeetingsService } from '../meetings/meetings.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CityData {
  city: string;
  state: string;
  district: number;
}

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  displayedColumns: string[] = ['city', 'state', 'district'];
  dataSource: MatTableDataSource<CityData>;

  cities = [];
  districts = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private meetingsService: MeetingsService, private districtService: DistrictService) {}

  ngOnInit() {
    this.getCities();
    this.getDistricts();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => {
      this.cities = cities;
      this.dataSource = new MatTableDataSource(this.cities);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => (this.districts = districts));
  }
}
