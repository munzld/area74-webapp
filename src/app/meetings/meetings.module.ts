import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { MeetingsComponent } from './meetings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [SharedModule, DataTablesModule]
})
export class MeetingsModule {}
