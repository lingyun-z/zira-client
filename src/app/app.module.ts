import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '../app/core/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { GraphQLModule } from 'app/core/graphql/graphql.module';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
