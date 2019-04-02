import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { BridgingTheGapComponent } from './bridging-the-gap.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BridgingTheGapComponent],
  imports: [SharedModule, DataTablesModule]
})
export class BridgingTheGapModule {}
