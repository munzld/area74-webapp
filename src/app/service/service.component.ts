import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from './file/fileupload';
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

  isAdmin = false;

  private servicePath = '/service';
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
    this.authService.isAdmin.then(result => {
      this.isAdmin = result;
    });
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
      this.servicePath + this.presentationsPath,
      this.presentationsPath,
      new FileUpload(event.target.files[0])
    );
  }

  deletePresentation(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.presentationsPath,
      this.presentationsPath,
      fileUpload
    );
  }

  getNewsletters(): void {
    this.fileService.getFiles(this.newslettersPath).subscribe(newsletters => {
      this.newsletters = newsletters;
    });
  }

  uploadNewsletter(event) {
    this.uploadFile(
      this.servicePath + this.newslettersPath,
      this.newslettersPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteNewsletter(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.newslettersPath,
      this.newslettersPath,
      fileUpload
    );
  }

  getArchives(): void {
    this.fileService.getFiles(this.archivesPath).subscribe(archives => {
      this.archives = archives;
    });
  }

  uploadArchive(event) {
    this.uploadFile(
      this.servicePath + this.archivesPath,
      this.archivesPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteArchive(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.archivesPath,
      this.archivesPath,
      fileUpload
    );
  }

  getAreaAssemblyAgendas(): void {
    this.fileService.getFiles(this.areaAssemblyAgendasPath).subscribe(areaAssemblyAgendas => {
      this.areaAssemblyAgendas = areaAssemblyAgendas;
    });
  }

  uploadAreaAssemblyAgenda(event) {
    this.uploadFile(
      this.servicePath + this.areaAssemblyPath + this.agendasPath,
      this.areaAssemblyAgendasPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaAssemblyAgenda(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaAssemblyPath + this.agendasPath,
      this.areaAssemblyAgendasPath,
      fileUpload
    );
  }

  getAreaAssemblyMinutes(): void {
    this.fileService.getFiles(this.areaAssemblyMinutesPath).subscribe(areaAssemblyMinutes => {
      this.areaAssemblyMinutes = areaAssemblyMinutes;
    });
  }

  uploadAreaAssemblyMinutes(event) {
    this.uploadFile(
      this.servicePath + this.areaAssemblyPath + this.minutesPath,
      this.areaAssemblyMinutesPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaAssemblyMinutes(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaAssemblyPath + this.minutesPath,
      this.areaAssemblyMinutesPath,
      fileUpload
    );
  }

  getAreaAssemblyReports(): void {
    this.fileService.getFiles(this.areaAssemblyReportsPath).subscribe(areaAssemblyReports => {
      this.areaAssemblyReports = areaAssemblyReports;
    });
  }

  uploadAreaAssemblyReport(event: any) {
    this.uploadFile(
      this.servicePath + this.areaAssemblyPath + this.reportsPath,
      this.areaAssemblyReportsPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaAssemblyReport(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaAssemblyPath + this.reportsPath,
      this.areaAssemblyReportsPath,
      fileUpload
    );
  }

  getAreaCommitteeAgendas(): void {
    this.fileService.getFiles(this.areaCommitteeAgendasPath).subscribe(areaCommitteeAgendas => {
      this.areaCommitteeAgendas = areaCommitteeAgendas;
    });
  }

  uploadAreaCommitteeAgenda(event: any) {
    this.uploadFile(
      this.servicePath + this.areaCommitteePath + this.agendasPath,
      this.areaCommitteeAgendasPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaCommitteeAgenda(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaCommitteePath + this.agendasPath,
      this.areaCommitteeAgendasPath,
      fileUpload
    );
  }

  getAreaCommitteeMinutes(): void {
    this.fileService.getFiles(this.areaCommitteeMinutesPath).subscribe(areaCommitteeMinutes => {
      this.areaCommitteeMinutes = areaCommitteeMinutes;
    });
  }

  uploadAreaCommitteeMinutes(event: any) {
    this.uploadFile(
      this.servicePath + this.areaCommitteePath + this.minutesPath,
      this.areaCommitteeMinutesPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaCommitteeMinutes(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaCommitteePath + this.minutesPath,
      this.areaCommitteeMinutesPath,
      fileUpload
    );
  }

  getAreaCommitteeReports(): void {
    this.fileService.getFiles(this.areaCommitteeReportsPath).subscribe(areaCommitteeReports => {
      this.areaCommitteeReports = areaCommitteeReports;
    });
  }

  uploadAreaCommitteeReport(event: any) {
    this.uploadFile(
      this.servicePath + this.areaCommitteePath + this.reportsPath,
      this.areaCommitteeReportsPath,
      new FileUpload(event.target.files[0])
    );
  }

  deleteAreaCommitteeReports(fileUpload: FileUpload) {
    this.fileService.deleteFile(
      this.servicePath + this.areaCommitteePath + this.reportsPath,
      this.areaCommitteeReportsPath,
      fileUpload
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

  private uploadFile(storagePath: string, dbPath: string, fileUpload: FileUpload) {
    this.fileService.pushFileToStorage(storagePath, dbPath, fileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
