import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './kanban-board.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanBoardComponent,
    data: {
      title: 'project',
      breadcrumb: [
        {
          label: 'Project/angular Jira Clone',
          url: '/project/board'
        },
        {
          label: 'Board',
          url: ''
        }
      ]
    },
  },

];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanbanBoardRoutingModule {}
