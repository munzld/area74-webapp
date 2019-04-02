import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PastConferencesPipe } from './past-conferences.pipe';
import { UpcomingConferencesPipe } from './upcoming-conferences.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PastConferencesPipe, UpcomingConferencesPipe],
  exports: [CommonModule, PastConferencesPipe, UpcomingConferencesPipe]
})
export class SharedModule {}
