import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from 'app/core/services/ticket.service';

@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, FormsModule, HttpClientModule],
  declarations: [WelcomeComponent],
  providers: [TicketService],
})
export class WelcomeModule {}
