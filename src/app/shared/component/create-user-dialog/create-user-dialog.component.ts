import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent implements OnInit {
  userFormGroup = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    role: new FormControl('MEMBER'),
  });
  userList;
  currentUser;
  isCreate = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private userService: UserService,
  ) {}

  ngOnInit() {
    if (!!this.data.projectAuth) {
      this.isCreate = false;
      this.userFormGroup.setValue({
        userId: this.data.projectAuth.userId,
        role: this.data.projectAuth.role,
      });
      this.userList = [this.data.projectAuth.user];
    } else {
      this.userService.getAllUser().subscribe(data => {
        const currentUserMap = {};
        this.data.userList.forEach(user => {
          currentUserMap[user.userId] = user;
        });
        this.userList = data.filter(user => !currentUserMap[user.id]);
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

  createSubmit() {
    const userAuth = {
      ...this.userFormGroup.value,
      projectId: this.data.project.projectId,
    };
    this.userService.addProjectAuth(userAuth).subscribe(data => {
      this.dialogRef.close();
    });
  }

  updateSubmit() {
    const userAuth = {
      ...this.userFormGroup.value,
      projectId: this.data.project.projectId,
      id: this.data.projectAuth.id,
    };
    this.userService.updateProjectAuth(userAuth).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
