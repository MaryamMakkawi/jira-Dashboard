import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, NgDynamicBreadcrumbModule],
  exports: [CommonModule, MaterialModule, NgDynamicBreadcrumbModule],
})
export class SharedModule {}
