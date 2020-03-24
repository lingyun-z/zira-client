import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TicketService } from 'app/core/services/ticket.service';
import { CreateTicketDialogComponent } from 'app/shared/component/create-ticket-dialog/create-ticket-dialog.component';
import { ProjectService } from 'app/core/services/project.service';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss'],
})
export class TicketBoardComponent implements OnInit {
  ticketList = [];
  project: any;
  pageNum: number;
  pageSize: number;
  constructor(
    private ticketService: TicketService,
    private projectService: ProjectService,
    private actRouter: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.actRouter.params.subscribe(params => {
      this.pageNum = 1;
      this.project = { name: params.project };
      this.getPagedTicket();
      this.projectService.getProjectByName(params.project).subscribe(data => {
        this.project = { id: data.id, name: data.name };
      });
    });
  }

  displayDetail(ticketNumber) {
    this.router.navigate([`/${this.project.name}/board/${ticketNumber}`]);
  }

  openCreateTicketDialog() {
    const dialogRef = this.dialog.open(CreateTicketDialogComponent, {
      width: '700px',
      height: '600px',
      data: { project: this.project, ticket: null },
    });

    dialogRef.afterClosed().subscribe(_ => this.getPagedTicket());
  }

  getPagedTicket() {
    this.ticketService
      .getPagedTicket(this.project.name, this.pageNum, this.pageSize)
      .subscribe(data => {
        this.ticketList = data;
      });
  }

  nextPage() {
    if (this.ticketList.length === 20) {
      this.pageNum += 1;
      this.getPagedTicket();
    }
  }

  prevPage() {
    if (this.pageNum > 1) {
      this.pageNum -= 1;
      this.getPagedTicket();
    }
  }
}
