import { Component, OnInit, Inject } from '@angular/core';
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
  isCreate = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private projectService: ProjectService,
  ) {
    if (!!data.project) {
      this.isCreate = false;
      this.projectFormGroup.setValue({
        name: data.project.name,
        description: data.project.description,
      });
    }
  }

  ngOnInit() {}

  createSubmit() {
    this.projectService
      .addProject(this.projectFormGroup.value)
      .subscribe(data => {
        this.dialogRef.close();
      });
  }

  updateSubmit() {
    const updatedProject = {
      ...this.projectFormGroup.value,
      id: this.data.project.id,
    };
    this.projectService.updateProject(updatedProject).subscribe(data => {
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
