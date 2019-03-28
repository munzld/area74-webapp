import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ConferenceComponent } from './conference.component';

@NgModule({
  declarations: [ConferenceComponent],
  imports: [
    SharedModule
  ]
})
export class ConferenceModule { }
