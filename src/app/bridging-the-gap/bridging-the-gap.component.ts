import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MeetingsService } from '../meetings/meetings.service';

@Component({
  selector: 'app-bridging-the-gap',
  templateUrl: './bridging-the-gap.component.html',
  styleUrls: ['./bridging-the-gap.component.scss']
})
export class BridgingTheGapComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  cities = [];

  constructor(private meetingsService: MeetingsService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.meetingsService.getCities().subscribe(cities => {
      this.cities = cities;
      this.dtTrigger.next();
    });
  }
}
