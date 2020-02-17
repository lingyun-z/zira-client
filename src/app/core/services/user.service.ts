import { Injectable } from '@angular/core';
import { GetCurrentUserGQL } from '../generated/graphql';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private getCurrentUserGQL: GetCurrentUserGQL) {}

  public getUserInfo() {
    return this.userInfo$;
  }

  public setUserInfo(user) {
    this.userInfo$.next(user);
  }

  public getCurrentUser() {
    return this.getCurrentUserGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getCurrentUser),
      );
  }
}
