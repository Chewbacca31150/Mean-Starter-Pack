// gen

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { NgModule, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// material design imports

import { AppModuleMaterial } from './app.module-material';

// components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// routes

import { routes } from './app.routing.module';

// services

import { UserService } from './services/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppModuleMaterial,
    routes,
    FlexLayoutModule
  ],
  providers: [UserService,],

  bootstrap: [AppComponent]
})
export class AppModule { }
