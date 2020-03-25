import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { split } from 'apollo-link';
import { Router } from '@angular/router';
import { get } from 'lodash';
import axios from 'axios';
import { environment } from 'environments/environment';
import { AuthService } from '../services/auth.service';
const { buildAxiosFetch } = require('@lifeomic/axios-fetch');

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private router: Router,
    private authService: AuthService,
  ) {
    const _httpLink = httpLink.create({ uri: environment.GRAPHQL_API_URL });

    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          Authorization: `${this.getToken()}` || 'no token',
        },
      });

      return forward(operation);
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (get(graphQLErrors[0], 'errorType') === 'ValidationError') {
        authService.logout();
      } else {
        console.error('Something went wrong. Please try again.');
      }
    });

    const gqlAxios = axios.create();
    const uploadLink = createUploadLink({
      uri: environment.GRAPHQL_API_URL,
      fetch: buildAxiosFetch(gqlAxios, (config, input, init) => ({
        ...config,
        onUploadProgress: init.onUploadProgress,
      })),
    });

    const isFile = value =>
      (typeof File !== 'undefined' && value instanceof File) ||
      (typeof Blob !== 'undefined' && value instanceof Blob);

    const isUpload = ({ variables }) => Object.values(variables).some(isFile);

    const terminalLink = split(isUpload, uploadLink, _httpLink);

    apollo.create({
      link: ApolloLink.from([authLink, errorLink, terminalLink]),
      cache: new InMemoryCache({
        dataIdFromObject: o =>
          o['id'] ? `${o['__typename']}:${o['id']}` : null,
      }),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all',
        },
      },
    });
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
