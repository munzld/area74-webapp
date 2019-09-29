import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUpload } from './fileupload';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  pushFileToStorage(
    storagePath: string,
    dbPath: string,
    fileUpload: FileUpload
  ): Observable<number> {
    const filePath = `${storagePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileDatabase(dbPath, fileUpload);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  deleteFile(storagePath: string, dbPath: string, fileUpload: FileUpload) {
    this.deleteFileDatabase(dbPath, fileUpload.key)
      .then(() => {
        this.deleteFileStorage(storagePath + '/', fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  getFiles(basePath: string): Observable<{ key: string; name: string; url: string; file: File }[]> {
    return this.db
      .list<FileUpload>(basePath)
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

  private saveFileDatabase(dbPath: string, fileUpload: FileUpload) {
    this.db.list(dbPath).push(fileUpload);
  }

  private deleteFileDatabase(dbPath: string, key: string) {
    return this.db.list(dbPath).remove(key);
  }

  private deleteFileStorage(storagePath: string, name: string) {
    const storageRef = this.storage.ref(storagePath);
    storageRef.child(name).delete();
  }
}
