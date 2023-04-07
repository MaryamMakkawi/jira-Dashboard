import { NgModule } from '@angular/core';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    KanbanBoardRoutingModule,
    SharedModule
  ]
})
export class KanbanBoardModule { }
