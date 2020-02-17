import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('app/routes/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'project',
        loadChildren: () =>
          import('app/routes/project/project.module').then(
            m => m.ProjectModule,
          ),
      },
      {
        path: ':project',
        children: [
          {
            path: 'board/:number',
            loadChildren: () =>
              import('app/routes/ticket-board/ticket-board.module').then(
                m => m.TicketBoardModule,
              ),
          },
          {
            path: 'board',
            loadChildren: () =>
              import('app/routes/ticket-board/ticket-board.module').then(
                m => m.TicketBoardModule,
              ),
          },
          {
            path: 'ticket/:number',
            loadChildren: () =>
              import('app/routes/ticket-board/ticket-board.module').then(
                m => m.TicketBoardModule,
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
