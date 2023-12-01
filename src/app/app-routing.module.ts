import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityEntryComponent } from './activity-entry/activity-entry.component';
import { ActivityPreviewComponent } from './activity-preview/activity-preview.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { HomeComponent } from './components/home/home.component';
import { AfterLoginComponent } from './after-login/after-login.component';

const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'aflogin',component:AfterLoginComponent },
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'verifyemail',component:VerifyemailComponent},
  {path:'dashboard',component:ActivityEntryComponent},
  {path:'preview' ,component:ActivityPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
