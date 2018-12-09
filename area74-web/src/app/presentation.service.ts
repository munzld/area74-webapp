import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(private http: HttpClient) { }

  public getPresentations(): Observable<any> {
    return this.http.get("./assets/service/presentation/presentations.json")
  }
}
