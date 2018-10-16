import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser} from './../_interfaces/login-user.model';
import {  RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';
import { AuthserviceService } from "./../../authservice.service";
import { Employee } from '../_interfaces/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public r :any ;
  public Message: {};
  public loginForm: FormGroup;

  constructor(private router: Router,  private repository : RepositoryService, private auth:AuthserviceService) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      pass: new FormControl('',[Validators.required])
     })
     }


     public validateControl(controlName: string) {
      if (this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched)
        return true;
  
      return false;
    }
  
    public hasError(controlName: string, errorName: string) {
      if (this.loginForm.controls[controlName].hasError(errorName))
        return true;
  
      return false;
    }

    public createLogin(loginFormvalue) {
      if (this.loginForm.valid) {
        this.executeLoginCreation(loginFormvalue);
        console.log(loginFormvalue);
        this.Message="";
      
      }
    }

    private executeLoginCreation(loginFormValue) {
      let loginuser: LoginUser = {
        EmpId: loginFormValue.id,
        EmpPassword: loginFormValue.pass,
       
      };
  
      let apiUrl = 'login';
      
      this.repository.createLogin(apiUrl, loginuser)
        .subscribe(res =>  {
              this.r = res;
          
            this.Message="Your loggin Success!";
            alert("Your loggin Success!");
            this.router.navigate(['/profile/list']);
           // localStorage.setItem('id',this.r.empId );
           // localStorage.setItem('pass',this.r.empPassword );
            localStorage.setItem('token',this.r );
            console.log(this.r)
        
            
          },
          (error => {
            this.Message="Your loggin faild, Check your Id or Password!";
          //  this.errorHandler.handleError(error);
          //  this.errorMessage = this.errorHandler.errorMessage;
          })
        )
    }

    public redirectToOwnerList(){
      this.router.navigate(['/profile/list']);
    }
    


  }


