import { Component, OnInit } from '@angular/core';

import { ArchivesService } from './archives/archives.service';
import { AreaAssemblyService } from './area-assembly/area-assembly.service';
import { AreaCommitteeService } from './area-committee/area-committee.service';
import { PresentationService } from './presentation/presentation.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  presentations = [];
  archives = [];
  areaAssemblyAgendas = [];
  areaAssemblyMinutes = [];
  areaAssemblyReports = [];
  areaCommitteeAgendas = [];
  areaCommitteeMinutes = [];
  areaCommitteeReports = [];

  constructor(
    public authService: AuthService,
    private presentationService: PresentationService,
    private archivesService: ArchivesService,
    private areaAssemblyService: AreaAssemblyService,
    private areaCommitteeService: AreaCommitteeService
  ) {}

  ngOnInit() {
    this.getPresentations();
    this.getArchives();
    this.getAreaAssemblyAgendas();
    this.getAreaAssemblyMinutes();
    this.getAreaAssemblyReports();
    this.getAreaCommitteeAgendas();
    this.getAreaCommitteeMinutes();
    this.getAreaCommitteeReports();
  }

  getPresentations(): void {
    this.presentationService
      .getPresentations()
      .subscribe(presentations => (this.presentations = presentations));
  }

  getArchives(): void {
    this.archivesService.getArchives().subscribe(archives => {
      this.archives = archives;
    });
  }

  getAreaAssemblyAgendas(): void {
    this.areaAssemblyService
      .getAgendas()
      .subscribe(areaAssemblyAgendas => (this.areaAssemblyAgendas = areaAssemblyAgendas));
  }

  getAreaAssemblyMinutes(): void {
    this.areaAssemblyService
      .getMinutes()
      .subscribe(areaAssemblyMinutes => (this.areaAssemblyMinutes = areaAssemblyMinutes));
  }

  getAreaAssemblyReports(): void {
    this.areaAssemblyService
      .getReports()
      .subscribe(areaAssemblyReports => (this.areaAssemblyReports = areaAssemblyReports));
  }

  getAreaCommitteeAgendas(): void {
    this.areaCommitteeService
      .getAgendas()
      .subscribe(areaCommitteeAgendas => (this.areaCommitteeAgendas = areaCommitteeAgendas));
  }

  getAreaCommitteeMinutes(): void {
    this.areaCommitteeService
      .getMinutes()
      .subscribe(areaCommitteeMinutes => (this.areaCommitteeMinutes = areaCommitteeMinutes));
  }

  getAreaCommitteeReports(): void {
    this.areaCommitteeService
      .getReports()
      .subscribe(areaCommitteeReports => (this.areaCommitteeReports = areaCommitteeReports));
  }
}
