import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { PresentationService } from './presentation/presentation.service';
import { ArchiveService } from './archive/archive.service';
import { AreaAssemblyService } from './area-assembly/area-assembly.service';
import { AreaCommitteeService } from './area-committee/area-committee.service';


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
  areaCommitteeMinutes = [];
  areaCommitteeReports = [];


  constructor(
    public authService: AuthService,
    private presentationService: PresentationService,
    private archiveService: ArchiveService,
    private areaAssemblyService: AreaAssemblyService,
    private areaCommitteeService: AreaCommitteeService
  ) { }

  ngOnInit() {
    this.getPresentations();
    this.getArchives();
    this.getAreaAssemblyAgendas();
    this.getAreaAssemblyMinutes();
    this.getAreaAssemblyReports();
    this.getAreaCommitteeMinutes();
    this.getAreaCommitteeReports();
  }

  getPresentations(): void {
    this.presentationService.getPresentations().subscribe(presentations => this.presentations = presentations);
  }

  getArchives(): void {
    this.archiveService.getArchives().subscribe(archives => this.archives = archives);
  }

  getAreaAssemblyAgendas(): void {
    this.areaAssemblyService.getAgendas().subscribe(areaAssemblyAgendas => this.areaAssemblyAgendas = areaAssemblyAgendas);
  }

  getAreaAssemblyMinutes(): void {
    this.areaAssemblyService.getMinutes().subscribe(areaAssemblyMinutes => this.areaAssemblyMinutes = areaAssemblyMinutes);
  }

  getAreaAssemblyReports(): void {
    this.areaAssemblyService.getReports().subscribe(areaAssemblyReports => this.areaAssemblyReports = areaAssemblyReports);
  }

  getAreaCommitteeMinutes(): void {
    this.areaCommitteeService.getMinutes().subscribe(areaCommitteeMinutes => this.areaCommitteeMinutes = areaCommitteeMinutes);
  }

  getAreaCommitteeReports(): void {
    this.areaCommitteeService.getReports().subscribe(areaCommitteeReports => this.areaCommitteeReports = areaCommitteeReports);
  }

}
