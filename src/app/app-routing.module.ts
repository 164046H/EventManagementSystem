import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AuthGuard } from "./auth.guard";

import { ShowEmployeesDetailsComponent } from './profile/show-employees-details/show-employees-details.component';


const routes: Routes = [

  { path: 'profile', loadChildren: "./profile/profile.module#ProfileModule" },
 // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
