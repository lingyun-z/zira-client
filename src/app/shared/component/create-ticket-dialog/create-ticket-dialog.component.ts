import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketService } from 'app/core/services/ticket.service';
import { UserService } from 'app/core/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.scss'],
})
export class CreateTicketDialogComponent implements OnInit {
  ticketFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    estimate: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    assignee: new FormControl(''),
  });
  userList = [];
  filteredOptions: Subject<any[]> = new Subject();
  isCreate = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateTicketDialogComponent>,
    private ticketService: TicketService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userService
      .getAuthUserByProjectId(this.data.project.id)
      .subscribe(data => {
        this.userList = data.map(user => {
          return { id: user.userId, ...user.user };
        });
      });
    if (!!this.data.ticket) {
      this.ticketFormGroup.setValue({
        title: this.data.ticket.title,
        estimate: this.data.ticket.estimate,
        type: this.data.ticket.type,
        description: this.data.ticket.description,
        assignee: this.data.ticket.assigneeUser,
      });
      this.isCreate = false;
    }
  }

  createTicket() {
    let newTicket = this.ticketFormGroup.value;
    newTicket.assignee = newTicket.assignee.id;
    newTicket = { ...newTicket, projectName: this.data.project.name };
    this.ticketService.addTicket(newTicket).subscribe(data => {
      this.router.navigate([`/${this.data.project.name}/board/${data.number}`]);
      this.dialogRef.close();
    });
  }

  updateTicket() {
    const newTicket = this.ticketFormGroup.value;
    newTicket.assignee = newTicket.assignee.id;
    Object.assign(newTicket, {
      projectName: this.data.project.name,
      id: this.data.ticket.id,
    });
    this.ticketService
      .updateTicket(this.ticketFormGroup.value)
      .subscribe(data => {
        this.dialogRef.close();
      });
  }

  close() {
    this.dialogRef.close();
  }

  displayUser(user) {
    return user ? user.name : '';
  }

  next() {
    let input = this.ticketFormGroup.controls.assignee.value;
    input = typeof input === 'string' ? input : input.name;
    this.filteredOptions.next(this._filter(input));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.userList.filter(user =>
      user.name.toLowerCase().includes(filterValue),
    );
  }
}
