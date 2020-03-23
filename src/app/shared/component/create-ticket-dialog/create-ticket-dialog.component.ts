import { Component, OnInit, Inject, Input } from '@angular/core';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public project: any,
    public dialogRef: MatDialogRef<CreateTicketDialogComponent>,
    private ticketService: TicketService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.userService.getAuthUserByProjectId(this.project.id).subscribe(data => {
      this.userList = data.map(user => {
        return { id: user.userId, ...user.user };
      });
    });
  }

  submit() {
    const newTicket = this.ticketFormGroup.value;
    newTicket.assignee = newTicket.assignee.id;
    Object.assign(newTicket, {
      projectName: this.project.name,
    });
    this.ticketService.addTicket(this.ticketFormGroup.value).subscribe(data => {
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
