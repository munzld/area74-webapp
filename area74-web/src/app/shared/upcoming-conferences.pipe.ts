import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingConferences'
})
export class UpcomingConferencesPipe implements PipeTransform {

  transform(conferences: Array<any>): Array<any> {
    return conferences.filter(function (conference) {
      return Date.parse(conference.endDate) > Date.now();
    });
  }

}
