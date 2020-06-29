import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { HomeComponent } from '../pages/home/home.component';


const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
  ];

export const router = appRoutes;