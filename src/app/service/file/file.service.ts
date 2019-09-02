import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from './file';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient, private storage: AngularFireStorage) {}

  public getFiles(location: string): Observable<File[]> {
    const ref = this.storage.ref(location);
    console.log('Ref location: ' + location);
    console.log('Ref storage: ' + JSON.stringify(ref));
    return new Observable<File[]>();
    // return this.http.get<File[]>(ref).pipe(
    //   map((files: File[]) => {
    //     files.forEach((file: File) => {
    //       this.getDownloadUrl(file.url).subscribe(url => {
    //         file.url = url;
    //       });
    //     });
    //     return files;
    //   })
    // );
  }

  private getDownloadUrl(url: string): Observable<string> {
    const ref = this.storage.ref(url);
    return ref.getDownloadURL();
  }
}
