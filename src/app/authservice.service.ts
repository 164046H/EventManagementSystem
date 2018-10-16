import { Injectable } from '@angular/core';
import { RepositoryService } from "./ShareData/repository.service";
import { LoginUser } from "./../app/profile/_interfaces/login-user.model";
import { JwtHelper  } from "angular-jwt";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private repository : RepositoryService, private router: Router) { }
  public log:any;

 public loggout(){
    localStorage.removeItem('token');
    this.router.navigate(['/profile/login']);
  }


  public islogged(){
    var token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      return false;
    }
  }


 public tokencheckRole(){
   var token = localStorage.getItem('token');

   const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(token);
  
   console.log(decodedToken.Role);
   return decodedToken.Role;

 }
 public tokencheckId(){
   var token = localStorage.getItem('token');

   const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(token);
  
   //console.log(decodedToken.Id);
   return decodedToken.Id;

 }
  public logcheck() {
    let loginuser: LoginUser = {
      EmpId: localStorage.getItem('id'),
      EmpPassword: localStorage.getItem('pass')
    
    };
    let apiUrl = 'login';
    
    this.repository.createLogin(apiUrl, loginuser)
      .subscribe(res =>  {
        
        if(res=="AD"){
          this.log = true;
          console.log("Admin");
        }
        else{
          this.log = false;
        }
        },
        (error => {
          this.log= false;
          })
      )
  }

}
