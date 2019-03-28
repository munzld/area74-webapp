import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { CanActivateViaAuthGuard } from './auth.guard';
import { CanNotActivateViaAuthGuard } from './not-auth.guard';
import { UserService } from './user.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    UserService,
    CanActivateViaAuthGuard,
    CanNotActivateViaAuthGuard
  ]
})
export class UserModule {
  constructor(@Optional() @SkipSelf() parentModule: UserModule) {
    throwIfAlreadyLoaded(parentModule, 'UserModule');
  }
}
