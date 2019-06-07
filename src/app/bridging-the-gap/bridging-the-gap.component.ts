import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from '../city/city.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

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

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
      this.dtTrigger.next();
    });
  }
}
