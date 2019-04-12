import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from './archive';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  archives: Archive[];

  constructor(private http: HttpClient, private storage: AngularFireStorage) {}

  public getArchives(): Observable<Archive[]> {
    return this.http.get<Archive[]>('./assets/archive/archives.json').pipe(
      map((archives: Archive[]) => {
        archives.forEach((archive: Archive) => {
          this.getDownloadUrl(archive.url).subscribe(url => {
            archive.url = url;
          });
        });
        return archives;
      })
    );
  }

  private getDownloadUrl(url: string): Observable<string> {
    const ref = this.storage.ref(url);
    return ref.getDownloadURL();
  }
}
