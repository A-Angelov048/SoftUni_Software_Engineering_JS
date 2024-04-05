import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
