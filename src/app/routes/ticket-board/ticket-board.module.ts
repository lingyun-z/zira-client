import { NgModule } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { TicketBoardComponent } from '../ticket-board/ticket-board.component';
import { TicketBoardRoutingModule } from '../ticket-board/ticket-board-routing.module';
import { TicketDetailModule } from '../ticket-detail/ticket-detail.module';
import { SharedModule } from 'app/shared/shared.module';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';

@NgModule({
  imports: [TicketBoardRoutingModule, TicketDetailModule, SharedModule],
  declarations: [TicketBoardComponent],
  entryComponents: [CreateTicketDialogComponent],
  providers: [TicketService],
})
export class TicketBoardModule {}
