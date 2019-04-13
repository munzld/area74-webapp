import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from './archive';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  archives: Archive[];

  constructor(private http: HttpClient) {}

  public getArchives(): Observable<Archive[]> {
    return this.http.get<Archive[]>('./assets/archive/archives.json');
  }
}
