import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaAssemblyService {

  constructor(private http: HttpClient) { }

  public getAgendas(): Observable<any> {
    return this.http.get('./assets/service/area-assembly/agendas/area-assembly-agendas.json');
  }

  public getMinutes(): Observable<any> {
    return this.http.get('./assets/service/area-assembly/minutes/area-assembly-minutes.json');
  }

  public getReports(): Observable<any> {
    return this.http.get('./assets/service/area-assembly/reports/area-assembly-reports.json');
  }
}
