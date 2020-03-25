/* tslint:disable */
export type Maybe<T> = T | null;

export interface ProjectInput {
  id?: Maybe<string>;

  name?: Maybe<string>;

  description?: Maybe<string>;
}

export interface AuthInput {
  id?: Maybe<string>;

  projectId: string;

  userId: string;

  role?: Maybe<Role>;
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
  Admin = 'ADMIN',
  Member = 'MEMBER',
}

// ====================================================
// Documents
// ====================================================

export namespace AddProject {
  export type Variables = {
    project: ProjectInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    addProject: Maybe<AddProject>;
  };

  export type AddProject = {
    __typename?: 'Project';

    id: string;
  };
}

export namespace AddProjectAuth {
  export type Variables = {
    auth?: Maybe<AuthInput>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    addProjectAuth: Maybe<AddProjectAuth>;
  };

  export type AddProjectAuth = {
    __typename?: 'Auth';

    id: string;
  };
}

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

    number: Maybe<string>;
  };
}

export namespace AddUser {
  export type Variables = {
    user?: Maybe<UserInput>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    addUser: Maybe<AddUser>;
  };

  export type AddUser = {
    __typename?: 'User';

    id: string;
  };
}

export namespace DeleteProjectAuth {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    deleteProjectAuth: Maybe<DeleteProjectAuth>;
  };

  export type DeleteProjectAuth = {
    __typename?: 'Response';

    status: Maybe<string>;
  };
}

export namespace DeleteProjectById {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    deleteProjectById: Maybe<DeleteProjectById>;
  };

  export type DeleteProjectById = {
    __typename?: 'Response';

    status: Maybe<string>;
  };
}

export namespace GetAllUser {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    getAllUser: Maybe<(Maybe<GetAllUser>)[]>;
  };

  export type GetAllUser = {
    __typename?: 'User';

    id: string;

    name: Maybe<string>;

    mail: Maybe<string>;
  };
}

export namespace GetAuthUserByProjectId {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: 'Query';

    getAuthUserByProjectId: Maybe<(Maybe<GetAuthUserByProjectId>)[]>;
  };

  export type GetAuthUserByProjectId = {
    __typename?: 'Auth';

    id: string;

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

    getPagedTicket: Maybe<(Maybe<GetPagedTicket>)[]>;
  };

  export type GetPagedTicket = {
    __typename?: 'Ticket';

    id: string;

    title: Maybe<string>;

    number: Maybe<string>;

    projectName: Maybe<string>;
  };
}

export namespace GetProjectByName {
  export type Variables = {
    projectName: string;
  };

  export type Query = {
    __typename?: 'Query';

    getProjectByName: Maybe<GetProjectByName>;
  };

  export type GetProjectByName = {
    __typename?: 'Project';

    id: string;

    name: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace GetAuthByUserId {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    getAuthByUserId: Maybe<(Maybe<GetAuthByUserId>)[]>;
  };

  export type GetAuthByUserId = {
    __typename?: 'Auth';

    id: string;

    projectId: string;

    project: Maybe<Project>;

    userId: string;

    role: Maybe<Role>;
  };

  export type Project = {
    __typename?: 'Project';

    id: string;

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

    createdBy: Maybe<string>;

    createdUser: Maybe<CreatedUser>;

    assignee: Maybe<string>;

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

export namespace UpdateProject {
  export type Variables = {
    project: ProjectInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateProject: Maybe<UpdateProject>;
  };

  export type UpdateProject = {
    __typename?: 'Project';

    id: string;
  };
}

export namespace UpdateProjectAuth {
  export type Variables = {
    auth?: Maybe<AuthInput>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateProjectAuth: Maybe<UpdateProjectAuth>;
  };

  export type UpdateProjectAuth = {
    __typename?: 'Auth';

    id: string;
  };
}

export namespace UpdateTicket {
  export type Variables = {
    ticket: TicketInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateTicket: Maybe<UpdateTicket>;
  };

  export type UpdateTicket = {
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

    createdBy: Maybe<string>;

    createdUser: Maybe<CreatedUser>;

    assignee: Maybe<string>;

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
export class AddProjectGQL extends Apollo.Mutation<
  AddProject.Mutation,
  AddProject.Variables
> {
  document: any = gql`
    mutation addProject($project: ProjectInput!) {
      addProject(project: $project) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class AddProjectAuthGQL extends Apollo.Mutation<
  AddProjectAuth.Mutation,
  AddProjectAuth.Variables
> {
  document: any = gql`
    mutation addProjectAuth($auth: AuthInput) {
      addProjectAuth(auth: $auth) {
        id
      }
    }
  `;
}
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
        number
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class AddUserGQL extends Apollo.Mutation<
  AddUser.Mutation,
  AddUser.Variables
> {
  document: any = gql`
    mutation addUser($user: UserInput) {
      addUser(user: $user) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class DeleteProjectAuthGQL extends Apollo.Mutation<
  DeleteProjectAuth.Mutation,
  DeleteProjectAuth.Variables
> {
  document: any = gql`
    mutation deleteProjectAuth($id: ID!) {
      deleteProjectAuth(id: $id) {
        status
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class DeleteProjectByIdGQL extends Apollo.Mutation<
  DeleteProjectById.Mutation,
  DeleteProjectById.Variables
> {
  document: any = gql`
    mutation deleteProjectById($id: ID!) {
      deleteProjectById(id: $id) {
        status
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetAllUserGQL extends Apollo.Query<
  GetAllUser.Query,
  GetAllUser.Variables
> {
  document: any = gql`
    query getAllUser {
      getAllUser {
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
export class GetAuthUserByProjectIdGQL extends Apollo.Query<
  GetAuthUserByProjectId.Query,
  GetAuthUserByProjectId.Variables
> {
  document: any = gql`
    query getAuthUserByProjectId($id: ID!) {
      getAuthUserByProjectId(id: $id) {
        id
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
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetProjectByNameGQL extends Apollo.Query<
  GetProjectByName.Query,
  GetProjectByName.Variables
> {
  document: any = gql`
    query getProjectByName($projectName: String!) {
      getProjectByName(projectName: $projectName) {
        id
        name
        description
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
        id
        projectId
        project {
          id
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
        createdDate
        updateDate
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class UpdateProjectGQL extends Apollo.Mutation<
  UpdateProject.Mutation,
  UpdateProject.Variables
> {
  document: any = gql`
    mutation updateProject($project: ProjectInput!) {
      updateProject(project: $project) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class UpdateProjectAuthGQL extends Apollo.Mutation<
  UpdateProjectAuth.Mutation,
  UpdateProjectAuth.Variables
> {
  document: any = gql`
    mutation updateProjectAuth($auth: AuthInput) {
      updateProjectAuth(auth: $auth) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class UpdateTicketGQL extends Apollo.Mutation<
  UpdateTicket.Mutation,
  UpdateTicket.Variables
> {
  document: any = gql`
    mutation updateTicket($ticket: TicketInput!) {
      updateTicket(ticket: $ticket) {
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
        createdDate
        updateDate
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
