import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { TicketService } from 'app/core/services/ticket.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
  declarations: [WelcomeComponent],
  providers: [TicketService],
})
export class WelcomeModule {}
