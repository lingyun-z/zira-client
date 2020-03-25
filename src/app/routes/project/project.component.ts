import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectService } from 'app/core/services/project.service';
import { CreateProjectDialogComponent } from 'app/shared/component/create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: any[];

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  openCreateProjectDialog() {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '700px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.getProjects();
    });
  }

  openUpdateProjectDialog(project) {
    console.log(project);
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '700px',
      height: '400px',
      data: {
        project: project,
      },
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.getProjects();
    });
  }

  removeProject(projectId) {
    this.projectService.deleteProjectById(projectId).subscribe(data => {
      this.getProjects();
    });
  }

  getProjects() {
    this.projectService.getAuthByUserId().subscribe(data => {
      this.projects = data;
    });
  }
}
