import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MeetingsModule { }
