import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [LinksComponent],
  imports: [
    SharedModule
  ]
})
export class LinksModule { }
