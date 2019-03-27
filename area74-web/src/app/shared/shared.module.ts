import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { PastConferencesPipe } from './past-conferences.pipe';
import { UpcomingConferencesPipe } from './upcoming-conferences.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [PastConferencesPipe, UpcomingConferencesPipe],
  exports: [
    PastConferencesPipe,
    UpcomingConferencesPipe,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class SharedModule {}
