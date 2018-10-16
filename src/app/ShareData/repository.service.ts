import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UserServiceService} from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public bodys=   { "EmpId": "1","EmpPassword": "Admin"};
  

  constructor( private http: HttpClient, private envUrl:UserServiceService , private userurl :UserServiceService) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
    
  }
  public getDataEmp(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.userurl));
    
  }
  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress),body, this.generateHeaders());
  
  
  }
  public createLogin(route: string, body){
    
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress),body, this.generateHeaders());
  }
  
  public deleteUser(route: string, body){
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress),body, this.generateHeaders());
  }



  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) 
    }

  }

 

}

