import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StepsComponent } from './steps.component';

@NgModule({
  declarations: [StepsComponent],
  imports: [
    SharedModule
  ]
})
export class StepsModule { }
