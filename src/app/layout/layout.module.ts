import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
