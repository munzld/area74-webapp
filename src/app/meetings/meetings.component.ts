import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { DistrictService } from '../district.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  cities = [];
  districts = [];

  constructor(private meetingsService: MeetingsService, private districtService: DistrictService) { }

  ngOnInit() {
    this.getCities();
    this.getDistricts();
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => this.cities = cities);
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => {
      this.districts = districts;
      this.dtTrigger.next();
    });
  }

}
