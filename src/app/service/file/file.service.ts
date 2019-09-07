import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from './file';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  public getFiles(
    basePath: string
  ): Observable<{ key: string; name: string; url: string; file: File }[]> {
    return this.db
      .list<File>(basePath)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }))
        )
      );
  }

  private getDownloadUrl(url: string): Observable<string> {
    const ref = this.storage.ref(url);
    return ref.getDownloadURL();
  }
}
