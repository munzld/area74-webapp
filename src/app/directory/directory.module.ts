import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [SharedModule]
})
export class DirectoryModule {}
