import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfessionalsComponent } from './professionals.component';

@NgModule({
  declarations: [ProfessionalsComponent],
  imports: [SharedModule]
})
export class ProfessionalsModule {}
