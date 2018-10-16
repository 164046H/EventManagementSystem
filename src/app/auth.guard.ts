import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from "./authservice.service";
import { RepositoryService } from "./ShareData/repository.service";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth : AuthserviceService, private repository:RepositoryService){}
log:any;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     // this.auth.logcheck();
      this.auth.tokencheckRole();
     
 // return this.auth.loggedStatus;
 if(this.auth.tokencheckRole()=="AD"){
   return true;
 }
 else{
   return false;
 }
 
  }
  
}

