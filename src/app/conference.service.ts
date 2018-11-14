import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private http: HttpClient) { }

  public getConferences(): Observable<any> {
    return this.http.get("./assets/conference/conferences.json")
  }
}
