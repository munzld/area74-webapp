import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  conferences = [];

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit() {
    this.getConferences();
  }

  getConferences(): void {
    this.conferenceService.getConferences().subscribe(conferences => this.conferences = conferences);
  }

}
