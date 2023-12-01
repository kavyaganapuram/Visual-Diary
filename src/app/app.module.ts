import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityEntryComponent } from './activity-entry/activity-entry.component';
import { ActivityPreviewComponent } from './activity-preview/activity-preview.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './environments/environment';


import {CloudinaryModule} from '@cloudinary/ng';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AfterLoginComponent } from './after-login/after-login.component';
@NgModule({
  declarations: [
    AppComponent,
    ActivityEntryComponent,
    ActivityPreviewComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    VerifyemailComponent,
    ForgotpasswordComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    CloudinaryModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
