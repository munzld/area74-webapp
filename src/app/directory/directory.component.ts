import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DirectoryService } from '../directory/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  directory = [];

  constructor(private directoryService: DirectoryService) {}

  ngOnInit() {
    this.getDirectory();
  }

  getDirectory(): void {
    this.directoryService.getDirectory().subscribe(directory => {
      this.directory = directory;
    });
  }
}
