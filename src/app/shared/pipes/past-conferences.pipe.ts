import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastConferences'
})
export class PastConferencesPipe implements PipeTransform {

  transform(conferences: Array<any>): Array<any> {
    return conferences.filter(function (conference) {
      return Date.parse(conference.endDate) < Date.now();
    });
  }

}
