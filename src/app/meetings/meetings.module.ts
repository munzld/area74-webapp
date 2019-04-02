import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MeetingsComponent } from './meetings.component';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [
    SharedModule
  ]
})
export class MeetingsModule { }
