import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandContainerComponent } from './brand-container/brand-container.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BrandContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BrandContainerComponent
  ]
})
export class SharedModule { }
