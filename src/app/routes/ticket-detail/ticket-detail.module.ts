import { NgModule } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { TicketDetailComponent } from './ticket-detail.component';
import { SharedModule } from 'app/shared/shared.module';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';

@NgModule({
  imports: [SharedModule],
  declarations: [TicketDetailComponent],
  exports: [TicketDetailComponent],
  providers: [TicketService],
  entryComponents: [CreateTicketDialogComponent],
})
export class TicketDetailModule {}
