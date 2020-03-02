import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
  declarations: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
