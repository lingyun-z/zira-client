import { Injectable } from '@angular/core';
import { GetAllTicketGQL } from '../generated/graphql';
import { take, map, flatMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

@Injectable()
export class TicketService {
  constructor(private getAllTicketGQL: GetAllTicketGQL) {}

  getAllTicket() {
    return this.getAllTicketGQL
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => {
          return data.getAllTicket;
        }),
      );
  }
}
