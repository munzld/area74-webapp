import { NgModule } from '@angular/core';
import { MeetingsComponent } from './meetings.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [
    SharedModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MeetingsModule {}
