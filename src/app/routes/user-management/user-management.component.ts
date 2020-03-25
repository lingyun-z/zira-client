import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectService } from 'app/core/services/project.service';
import { UserService } from 'app/core/services/user.service';
import { CreateUserDialogComponent } from 'app/shared/component/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  projectList = [];
  userList = [];
  selectedProject;
  currentUser;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.projectService.getAuthByUserId().subscribe(data => {
      this.projectList = data.filter(
        project => project.role === 'OWNER' || project.role === 'ADMIN',
      );
      if (this.projectList.length > 0) {
        this.selectedProject = this.projectList[0];
        this.getAuthUserByProjectId();
        this.userService.getCurrentUser().subscribe(currentUser => {
          this.currentUser = currentUser;
        });
      }
    });
  }

  getAuthUserByProjectId() {
    this.userService
      .getAuthUserByProjectId(this.selectedProject.projectId)
      .subscribe(data => {
        this.userList = data;
      });
  }

  removeUser(id) {
    this.userService.removeUser(id).subscribe(status => {
      this.getAuthUserByProjectId();
    });
  }

  openAddProjectAuthDialog() {
    const projectAuthDialog = this.dialog.open(CreateUserDialogComponent, {
      width: '700px',
      height: '300px',
      data: { project: this.selectedProject, userList: this.userList },
    });

    projectAuthDialog.afterClosed().subscribe(_ => {
      this.getAuthUserByProjectId();
    });
  }

  openUpdateProjectAuthDialog(projectAuth) {
    const projectAuthDialog = this.dialog.open(CreateUserDialogComponent, {
      width: '700px',
      height: '300px',
      data: {
        project: this.selectedProject,
        userList: this.userList,
        projectAuth: projectAuth,
      },
    });

    projectAuthDialog.afterClosed().subscribe(_ => {
      this.getAuthUserByProjectId();
    });
  }
}
