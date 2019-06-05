import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [SharedModule, MaterialModule]
})
export class DirectoryModule {}
