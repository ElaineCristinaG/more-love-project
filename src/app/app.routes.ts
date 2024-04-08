import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'', component: HomeComponent},

];
