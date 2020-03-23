import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatAutocompleteModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { CreateTicketDialogComponent } from './component/create-ticket-dialog/create-ticket-dialog.component';
import { CreateProjectDialogComponent } from './component/create-project-dialog/create-project-dialog.component';
const matModule = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...matModule,
  ],
  declarations: [CreateTicketDialogComponent, CreateProjectDialogComponent],
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
