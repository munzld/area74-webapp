import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ConceptsComponent } from './concepts.component';

@NgModule({
  declarations: [ConceptsComponent],
  imports: [
    SharedModule
  ]
})
export class ConceptsModule { }
