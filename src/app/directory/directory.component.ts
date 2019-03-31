import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectoryService } from '../directory/directory.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  directory = [];

  constructor(private directoryService: DirectoryService) { }

  ngOnInit() {
    this.getDirectory();
  }

  getDirectory(): void {
    this.directoryService.getDirectory().subscribe(directory => {
      this.directory = directory;
      this.dtTrigger.next();
    });
  }

}
