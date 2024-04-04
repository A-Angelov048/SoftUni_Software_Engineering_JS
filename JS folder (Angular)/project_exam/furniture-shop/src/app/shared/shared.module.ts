import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandContainerComponent } from './brand-container/brand-container.component';



@NgModule({
  declarations: [
    BrandContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandContainerComponent
  ]
})
export class SharedModule { }
