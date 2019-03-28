import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [SharedModule,
    RouterModule.forChild(ROUTES)],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})
export class LoginModule {}
