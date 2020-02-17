import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'app/core/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: any[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAuthByUserId().subscribe(data => {
      this.projects = data;
    });
  }
}
