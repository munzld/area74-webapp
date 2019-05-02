import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archives } from './archives';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {
  archives: Archives[];

  constructor(private http: HttpClient) {}

  public getArchives(): Observable<Archives[]> {
    return this.http.get<Archives[]>('./assets/service/archives/archives.json');
  }
}
