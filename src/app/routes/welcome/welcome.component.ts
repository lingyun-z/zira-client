import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketService } from 'app/core/services/ticket.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getAllTicket().subscribe(data => console.log(data));
  }
}
