import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InformationComponent } from './information.component';

@NgModule({
  declarations: [InformationComponent],
  imports: [
    SharedModule
  ]
})
export class InformationModule { }
