import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { DirectoryComponent } from './directory.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [SharedModule, DataTablesModule]
})
export class DirectoryModule {}
