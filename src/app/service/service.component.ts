import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from './file/file';
import { AuthService } from '../auth/auth.service';
import { FileService } from './file/file.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  selectedFiles: FileList;
  percentage: number;

  presentations = [];
  newsletters = [];
  archives = [];
  areaAssemblyAgendas = [];
  areaAssemblyMinutes = [];
  areaAssemblyReports = [];
  areaCommitteeAgendas = [];
  areaCommitteeMinutes = [];
  areaCommitteeReports = [];

  private presentationsPath = '/presentations';
  private newslettersPath = '/newsletters';
  private archivesPath = '/archives';
  private areaAssemblyPath = '/area-assembly';
  private areaCommitteePath = '/area-committee';
  private agendasPath = '/agendas';
  private minutesPath = '/minutes';
  private reportsPath = '/reports';
  private areaAssemblyAgendasPath = '/area-assembly-agendas';
  private areaAssemblyMinutesPath = '/area-assembly-minutes';
  private areaAssemblyReportsPath = '/area-assembly-reports';
  private areaCommitteeAgendasPath = '/area-committee-agendas';
  private areaCommitteeMinutesPath = '/area-committee-minutes';
  private areaCommitteeReportsPath = '/area-committee-reports';

  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPresentations();
    this.getNewsletters();
    this.getArchives();
    this.getAreaAssemblyAgendas();
    this.getAreaAssemblyMinutes();
    this.getAreaAssemblyReports();
    this.getAreaCommitteeAgendas();
    this.getAreaCommitteeMinutes();
    this.getAreaCommitteeReports();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  getPresentations(): void {
    this.fileService.getFiles(this.presentationsPath).subscribe(presentations => {
      this.presentations = presentations;
    });
  }

  uploadPresentation(event) {
    this.uploadFile(
      this.presentationsPath,
      this.presentationsPath,
      new File(event.target.files[0])
    );
  }

  deletePresentation(file: File) {
    this.fileService.deleteFile(this.presentationsPath, this.presentationsPath, file);
  }

  getNewsletters(): void {
    this.fileService.getFiles(this.newslettersPath).subscribe(newsletters => {
      this.newsletters = newsletters;
    });
  }

  uploadNewsletter(event) {
    this.uploadFile(this.newslettersPath, this.newslettersPath, new File(event.target.files[0]));
  }

  deleteNewsletter(file: File) {
    this.fileService.deleteFile(this.newslettersPath, this.newslettersPath, file);
  }

  getArchives(): void {
    this.fileService.getFiles(this.archivesPath).subscribe(archives => {
      this.archives = archives;
    });
  }

  uploadArchive(event) {
    this.uploadFile(this.archivesPath, this.archivesPath, new File(event.target.files[0]));
  }

  deleteArchive(file: File) {
    this.fileService.deleteFile(this.archivesPath, this.archivesPath, file);
  }

  getAreaAssemblyAgendas(): void {
    this.fileService.getFiles(this.areaAssemblyAgendasPath).subscribe(areaAssemblyAgendas => {
      this.areaAssemblyAgendas = areaAssemblyAgendas;
    });
  }

  uploadAreaAssemblyAgenda(event) {
    this.uploadFile(
      this.areaAssemblyPath + this.agendasPath,
      this.areaAssemblyAgendasPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaAssemblyAgenda(file: File) {
    this.fileService.deleteFile(
      this.areaAssemblyPath + this.agendasPath,
      this.areaAssemblyAgendasPath,
      file
    );
  }

  getAreaAssemblyMinutes(): void {
    this.fileService.getFiles(this.areaAssemblyMinutesPath).subscribe(areaAssemblyMinutes => {
      this.areaAssemblyMinutes = areaAssemblyMinutes;
    });
  }

  uploadAreaAssemblyMinutes(event) {
    this.uploadFile(
      this.areaAssemblyPath + this.minutesPath,
      this.areaAssemblyMinutesPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaAssemblyMinutes(file: File) {
    this.fileService.deleteFile(
      this.areaAssemblyPath + this.minutesPath,
      this.areaAssemblyMinutesPath,
      file
    );
  }

  getAreaAssemblyReports(): void {
    this.fileService.getFiles(this.areaAssemblyReportsPath).subscribe(areaAssemblyReports => {
      this.areaAssemblyReports = areaAssemblyReports;
    });
  }

  uploadAreaAssemblyReport(event: any) {
    this.uploadFile(
      this.areaAssemblyPath + this.reportsPath,
      this.areaAssemblyReportsPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaAssemblyReport(file: File) {
    this.fileService.deleteFile(
      this.areaAssemblyPath + this.reportsPath,
      this.areaAssemblyReportsPath,
      file
    );
  }

  getAreaCommitteeAgendas(): void {
    this.fileService.getFiles(this.areaCommitteeAgendasPath).subscribe(areaCommitteeAgendas => {
      this.areaCommitteeAgendas = areaCommitteeAgendas;
    });
  }

  uploadAreaCommitteeAgenda(event: any) {
    this.uploadFile(
      this.areaCommitteePath + this.agendasPath,
      this.areaCommitteeAgendasPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaCommitteeAgenda(file: File) {
    this.fileService.deleteFile(
      this.areaCommitteePath + this.agendasPath,
      this.areaCommitteeAgendasPath,
      file
    );
  }

  getAreaCommitteeMinutes(): void {
    this.fileService.getFiles(this.areaCommitteeMinutesPath).subscribe(areaCommitteeMinutes => {
      this.areaCommitteeMinutes = areaCommitteeMinutes;
    });
  }

  uploadAreaCommitteeMinutes(event: any) {
    this.uploadFile(
      this.areaCommitteePath + this.minutesPath,
      this.areaCommitteeMinutesPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaCommitteeMinutes(file: File) {
    this.fileService.deleteFile(
      this.areaCommitteePath + this.minutesPath,
      this.areaCommitteeMinutesPath,
      file
    );
  }

  getAreaCommitteeReports(): void {
    this.fileService.getFiles(this.areaCommitteeReportsPath).subscribe(areaCommitteeReports => {
      this.areaCommitteeReports = areaCommitteeReports;
    });
  }

  uploadAreaCommitteeReport(event: any) {
    this.uploadFile(
      this.areaCommitteePath + this.reportsPath,
      this.areaCommitteeReportsPath,
      new File(event.target.files[0])
    );
  }

  deleteAreaCommitteeReports(file: File) {
    this.fileService.deleteFile(
      this.areaCommitteePath + this.reportsPath,
      this.areaCommitteeReportsPath,
      file
    );
  }

  logout() {
    this.authService.doLogout().then(
      () => {
        this.router.navigate(['']);
      },
      error => {
        console.log('Logout error', error);
      }
    );
  }

  private uploadFile(storagePath: string, dbPath: string, file: File) {
    this.fileService.pushFileToStorage(storagePath, dbPath, file).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
