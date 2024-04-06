import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { FormsModule } from '@angular/forms';
import { FurnitureFormComponent } from './furniture-form/furniture-form.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateOfferComponent,
    FurnitureFormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
