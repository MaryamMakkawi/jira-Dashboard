import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];
  timePeriods2 = [
    'Bronze age',

  ];
  timePeriods3 = [
    'Bronze age',
    'Iron age',

  ];
  timePeriods4 = [
    'Bronze age',
    'Iron age',

  ];
  drop(event: any) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    moveItemInArray(this.timePeriods2, event.previousIndex, event.currentIndex);
    moveItemInArray(this.timePeriods3, event.previousIndex, event.currentIndex);
    moveItemInArray(this.timePeriods4, event.previousIndex, event.currentIndex);
  }
}
