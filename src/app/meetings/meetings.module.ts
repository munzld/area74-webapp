import { NgModule } from '@angular/core';
import { MeetingsComponent } from './meetings.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [SharedModule, MaterialModule]
})
export class MeetingsModule {}
