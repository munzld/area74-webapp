import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaCommitteeService {
  constructor(private http: HttpClient) {}

  public getAgendas(): Observable<any> {
    return this.http.get('./assets/service/area-committee/agendas/area-committee-agendas.json');
  }

  public getMinutes(): Observable<any> {
    return this.http.get('./assets/service/area-committee/minutes/area-committee-minutes.json');
  }

  public getReports(): Observable<any> {
    return this.http.get('./assets/service/area-committee/reports/area-committee-reports.json');
  }
}
