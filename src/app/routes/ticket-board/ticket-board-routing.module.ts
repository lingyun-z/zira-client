import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketBoardComponent } from '../ticket-board/ticket-board.component';

const routes: Routes = [
  {
    path: '',
    component: TicketBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketBoardRoutingModule {}
