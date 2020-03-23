import { Injectable } from '@angular/core';
import {
  AddTicketGQL,
  GetTicketByNumberGQL,
  GetPagedTicketGQL,
  UpdateTicketGQL,
} from '../generated/graphql';
import { take, map } from 'rxjs/operators';

@Injectable()
export class TicketService {
  constructor(
    private addTicketGQL: AddTicketGQL,
    private getPagedTicketGQL: GetPagedTicketGQL,
    private updateTicketGQL: UpdateTicketGQL,
    private getTicketByNumberGQL: GetTicketByNumberGQL,
  ) {}

  getTicketByNumber(projectName: string, ticketNumber: string) {
    return this.getTicketByNumberGQL
      .watch({ projectName, ticketNumber }, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getTicketByNumber),
      );
  }

  getPagedTicket(projectName: string, pageNum: number, pageSize: number) {
    return this.getPagedTicketGQL
      .watch(
        { projectName, pageNum, pageSize },
        { fetchPolicy: 'network-only' },
      )
      .valueChanges.pipe(
        take(1),
        map(({ data }) => data.getPagedTicket),
      );
  }

  addTicket(ticket) {
    return this.addTicketGQL.mutate({ ticket }).pipe(
      take(1),
      map(({ data }) => data.addTicket),
    );
  }

  updateTicket(ticket) {
    return this.updateTicketGQL.mutate({ ticket }).pipe(
      take(1),
      map(({ data }) => data.updateTicket),
    );
  }

  // getAllTicket() {
  //   return this.getAllTicketGQL
  //     .watch({}, { fetchPolicy: 'network-only' })
  //     .valueChanges.pipe(
  //       take(1),
  //       map(({ data }) => {
  //         return data.getAllTicket;
  //       }),
  //     );
  // }
}
