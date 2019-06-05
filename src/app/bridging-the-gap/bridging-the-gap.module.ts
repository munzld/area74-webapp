import { NgModule } from '@angular/core';
import { BridgingTheGapComponent } from './bridging-the-gap.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [BridgingTheGapComponent],
  imports: [SharedModule, MaterialModule]
})
export class BridgingTheGapModule {}
