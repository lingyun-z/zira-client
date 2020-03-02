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
import { UserService } from './core/services/user.service';
import { AuthService } from './core/services/auth.service';
import { AuthLogoutService } from './core/services/auth-logout.service';
import { WelcomeGuard } from './core/guard/welcome-guard.service';
import { AuthGuard } from './core/guard/auth-guard.service';

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
  providers: [
    UserService,
    AuthService,
    AuthLogoutService,
    AuthGuard,
    WelcomeGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
