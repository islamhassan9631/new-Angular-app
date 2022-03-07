import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddnwesComponent } from './viwes/addnwes/addnwes.component';
import { EditNewsComponent } from './viwes/edit-news/edit-news.component';
import { EditProfileComponent } from './viwes/edit-profile/edit-profile.component';
import { LoginComponent } from './viwes/login/login.component';
import { ProfileComponent } from './viwes/profile/profile.component';
import { SinginComponent } from './viwes/singin/singin.component';
import { UsersComponent } from './viwes/users/users.component';
import { ViewnwesComponent } from './viwes/viewnwes/viewnwes.component';




const routes: Routes = [
  { path: '', component: UsersComponent },



  { path: "login", component: LoginComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuardService] },

  { path: 'singin', component: SinginComponent },
 {path:"viewnwes",component:ViewnwesComponent,canActivate:[AuthGuardService]},
  { path: "addnwes",component:AddnwesComponent ,canActivate:[AuthGuardService]},
  { path: 'edit-profile', component: EditProfileComponent ,canActivate:[AuthGuardService]},
  { path: "edit-news/:id", component: EditNewsComponent ,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
