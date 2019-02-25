import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../services/conference/conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  pastConferences = [];
  upcomingConferences = [];

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit() {
    this.getPastConferences();
    this.getUpcomingConferences();
  }

  getPastConferences(): void {
    this.conferenceService.getPastConferences().subscribe(pastConferences => this.pastConferences = pastConferences);
  }

  getUpcomingConferences(): void {
    this.conferenceService.getUpcomingConferences().subscribe(upcomingConferences => this.upcomingConferences = upcomingConferences);
  }

}
