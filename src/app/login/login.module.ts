import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [SharedModule,
    RouterModule.forChild(ROUTES)],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})
export class LoginModule {
  constructor(@Optional() @SkipSelf() parentModule: LoginModule) {
    throwIfAlreadyLoaded(parentModule, 'LoginModule');
  }
}
