import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { JuridicalComponent } from './juridical/juridical.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';

export const routes: Routes = [

  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'support', component: SupportComponent},
  { path:'we', component: WhoWeAreComponent},
  { path:'juridical', component: JuridicalComponent},
  { path:'page-construction', component: PageUnderConstructionComponent},


];
