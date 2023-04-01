import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    LayoutRoutingModule,
    SharedModule

  ]
})
export class LayoutModule { }
