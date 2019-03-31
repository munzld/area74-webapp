import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';

@NgModule({
    imports: [SharedModule],
    declarations: [ServiceComponent]
})
export class ServiceModule { }
