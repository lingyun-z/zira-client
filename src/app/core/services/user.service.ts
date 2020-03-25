import { Injectable } from '@angular/core';
import {
  GetCurrentUserGQL,
  GetAuthUserByProjectIdGQL,
  DeleteProjectAuthGQL,
  GetAllUserGQL,
  AddUserGQL,
  AddProjectAuthGQL,
  UpdateProjectAuthGQL,
} from '../generated/graphql';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private getCurrentUserGQL: GetCurrentUserGQL,
    private getAuthUserByProjectIdGQL: GetAuthUserByProjectIdGQL,
    private deleteProjectAuthGQL: DeleteProjectAuthGQL,
    private getAllUserGQL: GetAllUserGQL,
    private addUserGQL: AddUserGQL,
    private addProjectAuthGQL: AddProjectAuthGQL,
    private updateProjectAuthGQL: UpdateProjectAuthGQL,
  ) {}

  public getCurrentUser() {
    return this.userInfo$;
  }

  public setCurrentUser(user) {
    this.userInfo$.next(user);
  }

  public queryCurrentUser() {
    return this.getCurrentUserGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getCurrentUser),
      );
  }

  public getAuthUserByProjectId(id: string) {
    return this.getAuthUserByProjectIdGQL
      .watch({ id }, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getAuthUserByProjectId),
      );
  }

  public removeUser(id: string) {
    return this.deleteProjectAuthGQL.mutate({ id }).pipe(
      take(1),
      map(({ data }) => data.deleteProjectAuth),
    );
  }

  public getAllUser() {
    return this.getAllUserGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getAllUser),
      );
  }

  public addUser(user) {
    return this.addUserGQL.mutate({ user }).pipe(
      take(1),
      map(({ data }) => data.addUser),
    );
  }

  public addProjectAuth(auth) {
    return this.addProjectAuthGQL.mutate({ auth }).pipe(
      take(1),
      map(({ data }) => data.addProjectAuth),
    );
  }

  public updateProjectAuth(auth) {
    return this.updateProjectAuthGQL.mutate({ auth }).pipe(
      take(1),
      map(({ data }) => data.updateProjectAuth),
    );
  }
}
