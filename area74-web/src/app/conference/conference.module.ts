import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ConferenceComponent } from './conference.component';

@NgModule({
  declarations: [ConferenceComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ConferenceModule { }
