import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from 'app/core/services/ticket.service';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ProjectService } from 'app/core/services/project.service';
import { CreateProjectDialogComponent } from 'app/shared/component/create-project-dialog/create-project-dialog.component';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  declarations: [ProjectComponent],
  entryComponents: [CreateProjectDialogComponent],
  providers: [TicketService, ProjectService],
})
export class ProjectModule {}
