import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../module-import-guard';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
