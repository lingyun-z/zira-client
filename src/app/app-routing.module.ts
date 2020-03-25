import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { WelcomeGuard } from 'app/core/guard/welcome-guard.service';
import { AuthGuard } from 'app/core/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('app/routes/welcome/welcome.module').then(
            m => m.WelcomeModule,
          ),
        canActivate: [WelcomeGuard],
      },
      {
        path: 'project',
        loadChildren: () =>
          import('app/routes/project/project.module').then(
            m => m.ProjectModule,
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('app/routes/user-management/user-management.module').then(
            m => m.UserManagementModule,
          ),
        canLoad: [AuthGuard],
      },
      {
        path: ':project/board/:number',
        loadChildren: () =>
          import('app/routes/ticket-board/ticket-board.module').then(
            m => m.TicketBoardModule,
          ),
        canLoad: [AuthGuard],
      },
      {
        path: ':project/board',
        loadChildren: () =>
          import('app/routes/ticket-board/ticket-board.module').then(
            m => m.TicketBoardModule,
          ),
        canLoad: [AuthGuard],
      },
      {
        path: '404_error',
        loadChildren: () =>
          import('app/routes/page-not-found/page-not-found.module').then(
            m => m.PageNotFoundModule,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '404_error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
