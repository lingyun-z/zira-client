/* tslint:disable */
export type Maybe<T> = T | null;

export interface ProjectInput {
  id?: Maybe<string>;

  name?: Maybe<string>;

  description?: Maybe<string>;
}

export interface TicketInput {
  id?: Maybe<string>;

  projectName?: Maybe<string>;

  parentId?: Maybe<string>;

  title?: Maybe<string>;

  type?: Maybe<string>;

  status?: Maybe<string>;

  estimate?: Maybe<string>;

  description?: Maybe<string>;

  createdBy?: Maybe<string>;

  assignee?: Maybe<string>;
}

export interface UserInput {
  id?: Maybe<string>;

  workUserId?: Maybe<string>;

  name?: Maybe<string>;

  mail?: Maybe<string>;
}

export enum Role {
  Owner = 'OWNER',
  Member = 'MEMBER',
}

// ====================================================
// Documents
// ====================================================

export namespace AddTicket {
  export type Variables = {
    ticket: TicketInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    addTicket: Maybe<AddTicket>;
  };

  export type AddTicket = {
    __typename?: 'Ticket';

    id: string;
  };
}

export namespace GetAuthUserByProjectId {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: 'Query';

    getAuthUserByProjectId: Maybe<Maybe<GetAuthUserByProjectId>[]>;
  };

  export type GetAuthUserByProjectId = {
    __typename?: 'Auth';

    projectId: string;

    userId: string;

    user: Maybe<User>;

    role: Maybe<Role>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    workUserId: Maybe<string>;

    name: Maybe<string>;

    mail: Maybe<string>;
  };
}

export namespace GetCurrentUser {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    getCurrentUser: Maybe<GetCurrentUser>;
  };

  export type GetCurrentUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;

    mail: Maybe<string>;
  };
}

export namespace GetPagedTicket {
  export type Variables = {
    projectName?: Maybe<string>;
    pageNum?: Maybe<number>;
    pageSize?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    getPagedTicket: Maybe<Maybe<GetPagedTicket>[]>;
  };

  export type GetPagedTicket = {
    __typename?: 'Ticket';

    id: string;

    title: Maybe<string>;

    number: Maybe<string>;

    projectName: Maybe<string>;

    createdBy: Maybe<string>;

    createdUser: Maybe<CreatedUser>;

    assignee: Maybe<string>;

    assigneeUser: Maybe<AssigneeUser>;
  };

  export type CreatedUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;
  };

  export type AssigneeUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;
  };
}

export namespace GetAuthByUserId {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    getAuthByUserId: Maybe<Maybe<GetAuthByUserId>[]>;
  };

  export type GetAuthByUserId = {
    __typename?: 'Auth';

    projectId: string;

    project: Maybe<Project>;

    userId: string;

    role: Maybe<Role>;
  };

  export type Project = {
    __typename?: 'Project';

    name: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace GetTicketByNumber {
  export type Variables = {
    projectName?: Maybe<string>;
    ticketNumber?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    getTicketByNumber: Maybe<GetTicketByNumber>;
  };

  export type GetTicketByNumber = {
    __typename?: 'Ticket';

    id: string;

    number: Maybe<string>;

    projectName: Maybe<string>;

    parentTicket: Maybe<ParentTicket>;

    title: Maybe<string>;

    description: Maybe<string>;

    estimate: Maybe<string>;

    status: Maybe<string>;

    type: Maybe<string>;

    createdUser: Maybe<CreatedUser>;

    assigneeUser: Maybe<AssigneeUser>;

    createdDate: Maybe<string>;

    updateDate: Maybe<string>;
  };

  export type ParentTicket = {
    __typename?: 'Ticket';

    id: string;

    number: Maybe<string>;
  };

  export type CreatedUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;
  };

  export type AssigneeUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;
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
export class AddTicketGQL extends Apollo.Mutation<
  AddTicket.Mutation,
  AddTicket.Variables
> {
  document: any = gql`
    mutation addTicket($ticket: TicketInput!) {
      addTicket(ticket: $ticket) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetAuthUserByProjectIdGQL extends Apollo.Query<
  GetAuthUserByProjectId.Query,
  GetAuthUserByProjectId.Variables
> {
  document: any = gql`
    query getAuthUserByProjectId($id: ID!) {
      getAuthUserByProjectId(id: $id) {
        projectId
        userId
        user {
          id
          workUserId
          name
          mail
        }
        role
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetCurrentUserGQL extends Apollo.Query<
  GetCurrentUser.Query,
  GetCurrentUser.Variables
> {
  document: any = gql`
    query getCurrentUser {
      getCurrentUser {
        id
        name
        mail
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetPagedTicketGQL extends Apollo.Query<
  GetPagedTicket.Query,
  GetPagedTicket.Variables
> {
  document: any = gql`
    query getPagedTicket($projectName: String, $pageNum: Int, $pageSize: Int) {
      getPagedTicket(
        projectName: $projectName
        pageNum: $pageNum
        pageSize: $pageSize
      ) {
        id
        title
        number
        projectName
        createdBy
        createdUser {
          id
          name
        }
        assignee
        assigneeUser {
          id
          name
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetAuthByUserIdGQL extends Apollo.Query<
  GetAuthByUserId.Query,
  GetAuthByUserId.Variables
> {
  document: any = gql`
    query getAuthByUserId {
      getAuthByUserId {
        projectId
        project {
          name
          description
        }
        userId
        role
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetTicketByNumberGQL extends Apollo.Query<
  GetTicketByNumber.Query,
  GetTicketByNumber.Variables
> {
  document: any = gql`
    query getTicketByNumber($projectName: String, $ticketNumber: String) {
      getTicketByNumber(
        projectName: $projectName
        ticketNumber: $ticketNumber
      ) {
        id
        number
        projectName
        parentTicket {
          id
          number
        }
        title
        description
        estimate
        status
        type
        createdUser {
          id
          name
        }
        assigneeUser {
          id
          name
        }
        createdDate
        updateDate
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
