import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TraditionsComponent } from './traditions.component';

@NgModule({
  declarations: [TraditionsComponent],
  imports: [
    SharedModule
  ]
})
export class TraditionsModule { }
