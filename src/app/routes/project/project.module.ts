import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from 'app/core/services/ticket.service';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ProjectService } from 'app/core/services/project.service';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  declarations: [ProjectComponent],
  providers: [TicketService, ProjectService],
})
export class ProjectModule {}
