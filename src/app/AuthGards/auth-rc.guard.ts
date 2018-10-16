
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from "./auth-service.service";
import { AuthserviceService } from "./../authservice.service";
import { RepositoryService } from "./../ShareData/repository.service";
import { LoginUser } from "./../profile/_interfaces/login-user.model";


@Injectable({
  providedIn: 'root'
})

export class AuthRCGuard implements CanActivate {
  constructor(private auth : AuthServiceService, private repository:RepositoryService){}
logRC:any;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //this.logincheck()
   this.auth.tokencheckRole();
 if(this.auth.tokencheckRole()=='AD'||this.auth.tokencheckRole()=='RC'){
   return true;
 }
 else{
   return false;
 }
 

  }
  public logincheck() {
    let loginuser: LoginUser = {
      EmpId: localStorage.getItem('id'),
      EmpPassword: localStorage.getItem('pass')
    
    };
    let apiUrl = 'login';
    
    this.repository.createLogin(apiUrl, loginuser)
      .subscribe(res =>  {
        
        if(res=="RC"||res=="AD"){
          this.logRC = true;
          console.log("Rc")
        }else{
        this.logRC = false;}
        },
        (error => {
          this.logRC= false;
          })
      )
  }
}

