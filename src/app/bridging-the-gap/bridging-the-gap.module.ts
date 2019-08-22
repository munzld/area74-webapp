import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { BridgingTheGapComponent } from './bridging-the-gap.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BridgingTheGapComponent],
  imports: [SharedModule, DataTablesModule, RouterModule]
})
export class BridgingTheGapModule {}
