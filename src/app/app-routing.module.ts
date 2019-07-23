import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { StarterPageComponent } from './starter-page/starter-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [{ path: '', component: StarterPageComponent },
{ path: 'register', component: RegisterPageComponent },
{ path: 'menu', component: MenuPageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'profile', component: UserProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
