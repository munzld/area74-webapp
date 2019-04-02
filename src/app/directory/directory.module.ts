import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DirectoryComponent } from './directory.component';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [
    SharedModule
  ]
})
export class DirectoryModule { }
