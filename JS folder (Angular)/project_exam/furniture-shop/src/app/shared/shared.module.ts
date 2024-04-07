import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandContainerComponent } from './brand-container/brand-container.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProvider } from './interceptor/app.interceptor';



@NgModule({
  declarations: [
    BrandContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    appInterceptorProvider
  ],
  exports: [
    BrandContainerComponent
  ]
})
export class SharedModule { }
