import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
