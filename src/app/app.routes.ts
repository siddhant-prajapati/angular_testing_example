import { Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path : '' , component : FirstPageComponent},
    { 
        path : 'layout', 
        component : AppLayoutComponent,
        children : [
            { path : '', component : DashboardComponent},
            { path : 'about', component : AboutComponent},
            { path : 'contact', component : ContactComponent}
        ]
    },
    {
        path : 'layout', redirectTo : 'layout/dashboard'
    },
    {
        path : 'login', component : LoginComponent
    },
    {
        path : 'signup', component : SignupComponent
    }
    
];
