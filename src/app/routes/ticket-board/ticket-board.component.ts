import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TicketService } from 'app/core/services/ticket.service';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss'],
})
export class TicketBoardComponent implements OnInit {
  ticketList;
  projectName: string;

  constructor(
    private ticketService: TicketService,
    private actRouter: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.ticketService
    //   .getTicketById('5aaa0819-2efc-11ea-b286-0242ac110002')
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    this.actRouter.params.subscribe(params => {
      this.projectName = params.project;
      this.ticketService
        .getPagedTicket(this.projectName, 1, 20)
        .subscribe(data => {
          this.ticketList = data;
        });
    });
  }

  displayDetail(ticketNumber) {
    this.router.navigate([`/${this.projectName}/board/${ticketNumber}`]);
  }

  openCreateTicketDialog() {
    const dialogRef = this.dialog.open(CreateTicketDialogComponent, {
      width: '700px',
      height: '600px',
      data: this.projectName,
    });

    // return dialogRef.beforeClosed();
  }
}
