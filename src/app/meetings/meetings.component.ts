import { Component, OnInit, ViewChild } from '@angular/core';
import { DistrictService } from '../district/district.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  cities = [];
  districts = [];

  constructor(private cityService: CityService, private districtService: DistrictService) {}

  ngOnInit() {
    this.getCities();
    this.getDistricts();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
      this.dtTrigger.next();
    });
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => (this.districts = districts));
  }
}
