import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../meetings/meetings.service';

@Component({
  selector: 'app-bridging-the-gap',
  templateUrl: './bridging-the-gap.component.html',
  styleUrls: ['./bridging-the-gap.component.scss']
})
export class BridgingTheGapComponent implements OnInit {

  cities = [];

  constructor(private meetingsService: MeetingsService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }
}
