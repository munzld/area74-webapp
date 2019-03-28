import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { throwIfAlreadyLoaded } from '../module-import-guard';

import { ErrorComponent } from './error.component';

export const routes: Routes = [
  { path: '', component: ErrorComponent, pathMatch: 'full' }
];

/**
 * This is the Angular module for the Env package
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ErrorComponent
  ]
})
export class ErrorModule {
  constructor( @Optional() @SkipSelf() parentModule: ErrorModule) {
    throwIfAlreadyLoaded(parentModule, 'ErrorModule');
  }
}
