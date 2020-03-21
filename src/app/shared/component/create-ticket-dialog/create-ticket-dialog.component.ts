import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketService } from 'app/core/services/ticket.service';
import { UserService } from 'app/core/services/user.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  filteredOptions: Observable<string[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public projectName: any,
    public dialogRef: MatDialogRef<CreateTicketDialogComponent>,
    private ticketService: TicketService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.userService
      .getAuthUserByProjectId('a7d243f3-3061-11ea-921f-0242ac110002')
      .subscribe(data => {
        this.userList = data.map(user => {
          return { id: user.userId, ...user.user };
        });
      });
    this.filteredOptions = this.ticketFormGroup.controls[
      'assignee'
    ].valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map((value: string) => this._filter(value)),
    );
  }

  submit() {
    const newTicket = this.ticketFormGroup.value;
    newTicket.assignee = newTicket.assignee.id;
    Object.assign(newTicket, {
      projectName: this.projectName,
    });
    console.log(newTicket);
    // this.ticketService.addTicket(this.ticketFormGroup.value).subscribe(data => {
    //   this.dialogRef.close();
    // });
  }

  close() {
    this.dialogRef.close();
  }

  displayUser(user) {
    return user ? user.name : '';
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.userList.filter(user =>
      user.name.toLowerCase().includes(filterValue),
    );
  }
}
