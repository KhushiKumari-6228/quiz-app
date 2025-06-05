import { Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', loadChildren:()=>import ('./modules/user/user.module').then(m => m.UserModule)},
    {path: 'admin', loadChildren:()=>import ('./modules/admin/admin.module').then(m => m.AdminModule)},

];
