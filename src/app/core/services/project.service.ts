import { Injectable } from '@angular/core';
import { GetAuthByUserIdGQL } from '../generated/graphql';
import { take, map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  constructor(private getAuthByUserIdGQL: GetAuthByUserIdGQL) {}

  getAuthByUserId() {
    return this.getAuthByUserIdGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getAuthByUserId),
      );
  }
}
