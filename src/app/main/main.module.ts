import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataComponent } from './home/data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    PageNotFoundComponent,
    DataComponent,
    SearchPipe,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
