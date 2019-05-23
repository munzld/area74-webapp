import { NgModule } from '@angular/core';
import { MeetingsComponent } from './meetings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [SharedModule]
})
export class MeetingsModule {}
