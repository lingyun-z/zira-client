/* tslint:disable */
export type Maybe<T> = T | null;

export interface UserInput {
  name: string;

  mail: string;
}

// ====================================================
// Documents
// ====================================================

export namespace GetAllTicket {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    getAllTicket: (Maybe<GetAllTicket>)[];
  };

  export type GetAllTicket = {
    __typename?: 'Ticket';

    id: string;

    title: string;

    createdBy: string;

    deleted: boolean;

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    name: string;

    mail: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root',
})
export class GetAllTicketGQL extends Apollo.Query<
  GetAllTicket.Query,
  GetAllTicket.Variables
> {
  document: any = gql`
    query getAllTicket {
      getAllTicket {
        id
        title
        createdBy
        deleted
        user {
          id
          name
          mail
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
