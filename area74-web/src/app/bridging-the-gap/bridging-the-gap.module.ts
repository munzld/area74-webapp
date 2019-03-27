import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BridgingTheGapComponent } from './bridging-the-gap.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BridgingTheGapComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BridgingTheGapModule { }
