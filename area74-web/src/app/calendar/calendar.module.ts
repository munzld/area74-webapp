import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    SharedModule
  ]
})
export class CalendarModule { }
