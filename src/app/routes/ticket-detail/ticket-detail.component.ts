import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  @Input() ticketNumber: string;
  projectName: string;
  ticket;
  constructor(
    private actRoute: ActivatedRoute,
    private ticketService: TicketService,
  ) {}

  ngOnInit() {
    this.actRoute.params
      .pipe(
        flatMap(params => {
          this.projectName = params.project;
          this.ticketNumber = params.number ? params.number : this.ticketNumber;
          if (this.ticketNumber) {
            return this.ticketService.getTicketByNumber(
              this.projectName,
              this.ticketNumber,
            );
          }
          return of(null);
        }),
      )
      .subscribe(data => {
        this.ticket = data;
      });
  }
}
