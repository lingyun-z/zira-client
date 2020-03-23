import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from 'app/core/services/project.service';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss'],
})
export class CreateProjectDialogComponent implements OnInit {
  projectFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });
  result;
  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {}

  submit() {
    this.projectService
      .addProject(this.projectFormGroup.value)
      .subscribe(data => {
        this.result = data;
      });
  }

  close() {
    this.dialogRef.close();
  }
}
