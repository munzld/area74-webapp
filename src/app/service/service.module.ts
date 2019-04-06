import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  imports: [SharedModule],
  declarations: [ServiceComponent]
})
export class ServiceModule {
  constructor(private storage: AngularFireStorage) {}
}
