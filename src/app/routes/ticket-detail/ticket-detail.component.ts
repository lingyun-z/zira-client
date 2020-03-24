import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from 'app/core/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from 'app/core/services/user.service';
import { MatDialog } from '@angular/material';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  @Input() ticketNumber: string;
  @Input() projectId: string;
  projectName: string;
  ticket;
  currentUser;

  ticketStatusFlow = {
    ready: { next: 'Dev Accept', prev: null },
    'Dev Accept': { next: 'Dev Done', prev: 'ready' },
    'Dev Done': { next: 'QA Ready', prev: 'Dev Accept' },
    'QA Ready': { next: 'QA Accept', prev: 'Dev Done' },
    'QA Accept': { next: 'QA Done', prev: 'QA Ready' },
    'QA Done': { next: 'Done', prev: 'QA Accept' },
    Done: { next: null, prev: 'QA Done' },
  };
  constructor(
    private actRoute: ActivatedRoute,
    private dialog: MatDialog,
    private ticketService: TicketService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.projectName = params.project;
      this.ticketNumber = params.number ? params.number : this.ticketNumber;
      if (this.ticketNumber) {
        this.getTicket();
      }
    });
    this.userService.userInfo$.pipe(take(1)).subscribe(user => {
      this.currentUser = user;
    });
  }

  assignToMe() {
    if (this.ticket.assigneeUser.id !== this.currentUser.id) {
      const updateTicket = {
        id: this.ticket.id,
        projectName: this.ticket.projectName,
        assignee: this.currentUser.id,
      };
      this.ticketService
        .updateTicket(updateTicket)
        .subscribe(_ => this.getTicket());
    }
  }

  getTicket() {
    this.ticketService
      .getTicketByNumber(this.projectName, this.ticketNumber)
      .subscribe(data => {
        this.ticket = data;
      });
  }

  openUpdateTicketDialog() {
    const dialogRef = this.dialog.open(CreateTicketDialogComponent, {
      width: '700px',
      height: '600px',
      data: {
        project: { id: this.projectId, name: this.projectName },
        ticket: this.ticket,
      },
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.getTicket();
    });
  }

  updateTicketStatus(status) {
    const updatedTicket = { id: this.ticket.id, status };
    this.ticketService.updateTicket(updatedTicket).subscribe(data => {
      this.ticket = data;
    });
  }
}
