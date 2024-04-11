import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { authGuard, loginUserGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [loginUserGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [loginUserGuard] },
    { path: 'create-offer', component: CreateOfferComponent, canActivate: [authGuard] },
    {
        path: 'details', children: [
            { path: ':id', component: DetailsComponent },
            { path: 'edit/:id', component: EditComponent, canActivate: [authGuard] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }