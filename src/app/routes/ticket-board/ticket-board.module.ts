import { NgModule } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { TicketBoardComponent } from './ticket-board.component';
import { TicketBoardRoutingModule } from './ticket-board-routing.module';
import { TicketDetailModule } from '../ticket-detail/ticket-detail.module';
import { SharedModule } from 'app/shared/shared.module';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';
import { ProjectService } from 'app/core/services/project.service';

@NgModule({
  imports: [TicketBoardRoutingModule, TicketDetailModule, SharedModule],
  declarations: [TicketBoardComponent],
  entryComponents: [CreateTicketDialogComponent],
  providers: [TicketService, ProjectService],
})
export class TicketBoardModule {}
