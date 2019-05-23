import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DistrictService } from '../district/district.service';
import { MeetingsService } from '../meetings/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  cities = [];
  districts = [];

  constructor(private meetingsService: MeetingsService, private districtService: DistrictService) {}

  ngOnInit() {
    this.getCities();
    this.getDistricts();
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => (this.districts = districts));
  }
}
