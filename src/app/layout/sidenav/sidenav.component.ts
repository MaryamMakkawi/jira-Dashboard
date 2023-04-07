import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  fromEvent,
  merge,
  Observable,
  share,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnInit(): void {
    enum KeyCode {
      Enter = 'Enter',
    }
    const enter$ = this.shortcut([KeyCode.Enter]);
    enter$.subscribe((res) => {
      this.drawer.toggle();
    });
  }

  shortcut = (shortcut: any[]): Observable<KeyboardEvent[]> => {
    const keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown');
    const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

    const keyEvents$ = merge(keyDown$, keyUp$).pipe(
      distinctUntilChanged((a, b) => a.code === b.code && a.type === b.type),
      share()
    );

    const createKeyPressStream = (charCode: any) =>
      keyEvents$.pipe(filter((event) => event.code === charCode.valueOf()));

    const keyCodeEvents$ = shortcut.map((s) => createKeyPressStream(s));
    return combineLatest(keyCodeEvents$).pipe(
      filter<KeyboardEvent[]>((arr) => arr.every((a) => a.type === 'keydown'))
    );
  };
}
