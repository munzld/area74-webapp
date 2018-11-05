import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  cities = [];
  districts = [];

  constructor(private meetingsService: MeetingsService, private districtService: DistrictService) {

  }

  ngOnInit() {
    this.getCities();
    this.getDistricts();
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => this.cities = cities);
  }

  getDistricts(): void {
    this.districtService.getDistricts().subscribe(districts => this.districts = districts);
  }

}
