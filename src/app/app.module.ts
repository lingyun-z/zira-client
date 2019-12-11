import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { GraphQLModule } from 'app/core/graphql/graphql.module';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
