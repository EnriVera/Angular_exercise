import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { HomeTaskComponent } from '../pages/home-task/home-task.component';
import { PagesGroupComponent } from '../pages/pages-group/pages-group.component';
import { AccountComponent } from '../pages/account/account.component';


const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'group', component: PagesGroupComponent },
    { path: 'account/:id', component: AccountComponent },
    { path: 'sign-up/data/:fullname/:email', component: SignUpComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-task', component: HomeTaskComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const router = appRoutes;