import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.calendarService.getEvents().subscribe(events => this.events = events);
  }

}
