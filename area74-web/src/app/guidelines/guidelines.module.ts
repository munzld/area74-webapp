import { NgModule } from '@angular/core';

import { GuidelinesComponent } from './guidelines.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GuidelinesComponent],
  imports: [
    SharedModule
  ]
})
export class GuidelinesModule { }
