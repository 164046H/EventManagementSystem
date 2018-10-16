import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedHeaderComponent } from './SharePart/logged-header/logged-header.component';
import { LogingHeaderComponent } from './SharePart/loging-header/loging-header.component';
import { RepositoryService } from './ShareData/repository.service';
import {UserServiceService } from './ShareData/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './SharePart/sidenavbar/sidenavbar.component';
import { AuthserviceService } from "./authservice.service";
import { AuthServiceService } from "./AuthGards/auth-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LoggedHeaderComponent,
    LogingHeaderComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule

 
    
  ],
  providers: [
    RepositoryService,
    UserServiceService,
    AuthserviceService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
