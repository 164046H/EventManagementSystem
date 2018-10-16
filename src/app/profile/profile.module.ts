import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ShowEmployeesDetailsComponent } from './show-employees-details/show-employees-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsUpdateComponent } from './employee-details-update/employee-details-update.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AuthGuard } from "./../auth.guard";
//import { AuthRCGuard} from "./../auth-rc.guard"
import { AuthAdminGuard } from "./../AuthGards/auth-admin.guard";
import { AuthRCGuard } from "./../AuthGards/auth-rc.guard";
import {AuthEmployeeGuard  } from "./../AuthGards/auth-employee.guard";

@NgModule({
  imports: [

    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: ShowEmployeesDetailsComponent,canActivate:[AuthRCGuard]},
      { path: 'signup', component: SignupUserComponent },
      { path: 'login', component: LoginUserComponent },
      { path: 'update', component: EmployeeDetailsUpdateComponent,canActivate:[AuthRCGuard] },
      { path: 'list/:id', component: EmployeeDetailsComponent ,canActivate:[AuthAdminGuard] },
      { path: 'delete/:id', component: DeleteEmployeeComponent },
      
    ])
  ],
  declarations: [LoginUserComponent, SignupUserComponent, ShowEmployeesDetailsComponent, EmployeeDetailsComponent, EmployeeDetailsUpdateComponent, DeleteEmployeeComponent]
})
export class ProfileModule { }
