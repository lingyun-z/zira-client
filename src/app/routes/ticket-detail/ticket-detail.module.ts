import { NgModule } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { TicketDetailComponent } from './ticket-detail.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [TicketDetailComponent],
  exports: [TicketDetailComponent],
  providers: [TicketService],
})
export class TicketDetailModule {}
