import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { FileService } from './file/file.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  presentations = [];
  newsletters = [];
  archives = [];
  areaAssemblyAgendas = [];
  areaAssemblyMinutes = [];
  areaAssemblyReports = [];
  areaCommitteeAgendas = [];
  areaCommitteeMinutes = [];
  areaCommitteeReports = [];

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

  getPresentations(): void {
    this.fileService.getFiles('/presentations').subscribe(presentations => {
      this.presentations = presentations;
    });
  }

  getNewsletters(): void {
    this.fileService.getFiles('/newsletters').subscribe(newsletters => {
      this.newsletters = newsletters;
    });
  }

  getArchives(): void {
    this.fileService.getFiles('/archives').subscribe(archives => {
      this.archives = archives;
    });
  }

  getAreaAssemblyAgendas(): void {
    this.fileService.getFiles('/area-assembly-agendas').subscribe(areaAssemblyAgendas => {
      this.areaAssemblyAgendas = areaAssemblyAgendas;
    });
  }

  getAreaAssemblyMinutes(): void {
    this.fileService.getFiles('/area-assembly-minutes').subscribe(areaAssemblyMinutes => {
      this.areaAssemblyMinutes = areaAssemblyMinutes;
    });
  }

  getAreaAssemblyReports(): void {
    this.fileService.getFiles('/area-assembly-reports').subscribe(areaAssemblyReports => {
      this.areaAssemblyReports = areaAssemblyReports;
    });
  }

  getAreaCommitteeAgendas(): void {
    this.fileService.getFiles('/area-committee-agendas').subscribe(areaCommitteeAgendas => {
      this.areaCommitteeAgendas = areaCommitteeAgendas;
    });
  }

  getAreaCommitteeMinutes(): void {
    this.fileService.getFiles('/area-committee-minutes').subscribe(areaCommitteeMinutes => {
      this.areaCommitteeMinutes = areaCommitteeMinutes;
    });
  }

  getAreaCommitteeReports(): void {
    this.fileService.getFiles('/area-committee-reports').subscribe(areaCommitteeReports => {
      this.areaCommitteeReports = areaCommitteeReports;
    });
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        this.router.navigate(['']);
      },
      error => {
        console.log('Logout error', error);
      }
    );
  }
}
