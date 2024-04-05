import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoGalleryComponent } from './info-gallery/info-gallery.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IntroductionComponent,
    AboutUsComponent,
    InfoGalleryComponent,
    HomeComponent,
    ShopComponent,
    BrandSectionComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  exports: [
    IntroductionComponent
  ]
})
export class FeaturesModule { }
