import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private http: HttpClient) { }

  public getArchives(): Observable<any> {
    return this.http.get("./assets/archive/archives.json")
  }
}
