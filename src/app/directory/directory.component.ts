import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Directory } from '../directory/directory';
import { DirectoryService } from '../directory/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss', '../shared/material.scss']
})
export class DirectoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource: MatTableDataSource<Directory>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private directoryService: DirectoryService) {}

  ngOnInit() {
    this.getDirectory();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDirectory(): void {
    this.directoryService.getDirectory().subscribe(directory => {
      this.dataSource = new MatTableDataSource(directory);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
