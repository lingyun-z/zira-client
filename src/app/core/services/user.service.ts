import { Injectable } from '@angular/core';
import { GetCurrentUserGQL } from '../generated/graphql';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private getCurrentUserGQL: GetCurrentUserGQL) {}

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
}
