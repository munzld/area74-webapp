import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { PresentationService } from '../../services/presentation/presentation.service';
import { ArchiveService } from '../../services/archive/archive.service';
import { AreaAssemblyService } from '../../services/area-assembly/area-assembly.service';
import { AreaCommitteeService } from '../../services/area-committee/area-committee.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  presentations = [];
  archives = [];
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
