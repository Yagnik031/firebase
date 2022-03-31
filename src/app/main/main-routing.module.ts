import { DataComponent } from './home/data/data.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'home/:id',
        component: DataComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
