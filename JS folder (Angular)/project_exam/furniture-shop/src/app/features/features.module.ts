import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoGalleryComponent } from './info-gallery/info-gallery.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    AboutUsComponent,
    InfoGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroductionComponent,
    AboutUsComponent,
    InfoGalleryComponent
  ]
})
export class FeaturesModule { }
