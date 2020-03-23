import { Injectable } from '@angular/core';
import {
  GetAuthByUserIdGQL,
  AddProjectGQL,
  GetProjectByNameGQL,
} from '../generated/graphql';
import { take, map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  constructor(
    private getAuthByUserIdGQL: GetAuthByUserIdGQL,
    private addProjectGQL: AddProjectGQL,
    private getProjectByNameGQL: GetProjectByNameGQL,
  ) {}

  getAuthByUserId() {
    return this.getAuthByUserIdGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getAuthByUserId),
      );
  }

  getProjectByName(projectName: string) {
    return this.getProjectByNameGQL
      .watch({ projectName }, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getProjectByName),
      );
  }

  addProject(project) {
    return this.addProjectGQL.mutate({ project }).pipe(
      take(1),
      map(({ data }) => data.addProject),
    );
  }
}
