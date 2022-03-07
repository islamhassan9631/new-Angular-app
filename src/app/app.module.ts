import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './lyaout/footer/footer.component';
import { HeaderComponent } from './lyaout/header/header.component';
import { UsersComponent } from './viwes/users/users.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { NameofserviceService } from './services/home.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './viwes/singin/singin.component';
import { LoginComponent } from './viwes/login/login.component';

import { ProfileComponent } from './viwes/profile/profile.component';
import { TokenService } from './services/token.service';
import { NewsService } from './services/news.service';
import { ReportersService } from './services/reporters.service';
import { ViewnwesComponent } from './viwes/viewnwes/viewnwes.component';
import { AddnwesComponent } from './viwes/addnwes/addnwes.component';
import { EditProfileComponent } from './viwes/edit-profile/edit-profile.component';
import { EditNewsComponent } from './viwes/edit-news/edit-news.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UsersComponent,



    SinginComponent,
    LoginComponent,

    ProfileComponent,
    ViewnwesComponent,
    AddnwesComponent,
    EditProfileComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NameofserviceService,
    NewsService,
    ReportersService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
