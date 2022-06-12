import { NgModule } from '@angular/core';
import { NgxIpynbComponent } from './ngx-ipynb.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxIpynbComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxIpynbComponent
  ]
})
export class NgxIpynbModule { }
