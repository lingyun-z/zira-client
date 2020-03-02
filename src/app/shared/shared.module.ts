import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { CreateTicketDialogComponent } from './component/create-ticket-dialog/create-ticket-dialog.component';
const matModule = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...matModule,
  ],
  declarations: [CreateTicketDialogComponent],
  exports: [
    CommonModule,
    FormsModule,
    ...matModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
