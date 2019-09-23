import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from './file';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  pushFileToStorage(storagePath: string, dbPath: string, file: File): Observable<number> {
    const filePath = storagePath + '/' + file.name;
    console.log('pushFileToStorage: ' + filePath);
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            console.log('File available at', downloadURL);
            file.url = downloadURL;
            file.name = file.file.name;
            this.saveFileDatabase(dbPath, file);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  deleteFile(storagePath: string, dbPath: string, file: File) {
    this.deleteFileDatabase(dbPath, file.key)
      .then(() => {
        this.deleteFileStorage(storagePath + '/', file.name);
      })
      .catch(error => console.log(error));
  }

  getFiles(basePath: string): Observable<{ key: string; name: string; url: string; file: File }[]> {
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

  private saveFileDatabase(dbPath: string, file: File) {
    console.log('saveFileDatabase: ' + dbPath + file.name);
    this.db.list(dbPath).push(file);
  }

  private deleteFileDatabase(dbPath: string, key: string) {
    console.log('deleteFileDatabase: ' + dbPath + key);
    return this.db.list(dbPath).remove(key);
  }

  private deleteFileStorage(storagePath: string, name: string) {
    console.log('deleteFileStorage' + storagePath + name);
    const storageRef = this.storage.ref(storagePath);
    storageRef.child(name).delete();
  }
}
