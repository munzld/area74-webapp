import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { PastConferencesPipe } from './past-conferences.pipe';
import { UpcomingConferencesPipe } from './upcoming-conferences.pipe';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, DataTablesModule],
  declarations: [PastConferencesPipe, UpcomingConferencesPipe],
  exports: [
    CommonModule,
    PastConferencesPipe,
    UpcomingConferencesPipe,
    NgbModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SharedModule {}
