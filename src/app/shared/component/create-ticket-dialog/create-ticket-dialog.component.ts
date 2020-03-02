import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketService } from 'app/core/services/ticket.service';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public projectName: any,
    public dialogRef: MatDialogRef<CreateTicketDialogComponent>,
    private ticketService: TicketService,
  ) {}

  ngOnInit() {}

  submit() {
    Object.assign(this.ticketFormGroup.value, {
      projectName: this.projectName,
    });
    this.ticketService.addTicket(this.ticketFormGroup.value).subscribe(data => {
      console.log(data);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
