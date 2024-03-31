import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoGalleryComponent } from './info-gallery/info-gallery.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IntroductionComponent,
    AboutUsComponent,
    InfoGalleryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntroductionComponent
  ]
})
export class FeaturesModule { }
