import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BridgingTheGapComponent } from './bridging-the-gap.component';

@NgModule({
  declarations: [BridgingTheGapComponent],
  imports: [
    SharedModule
  ]
})
export class BridgingTheGapModule { }
