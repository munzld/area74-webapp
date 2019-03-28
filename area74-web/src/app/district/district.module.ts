import { NgModule } from '@angular/core';

import { DistrictComponent } from './district.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DistrictComponent],
  imports: [
    SharedModule
  ]
})
export class DistrictModule { }
