import { Component, OnInit } from '@angular/core';
import { RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';
import {Employee} from './../_interfaces/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-employees-details',
  templateUrl: './show-employees-details.component.html',
  styleUrls: ['./show-employees-details.component.css']
})
export class ShowEmployeesDetailsComponent implements OnInit {

  public result : any;
  
  public token : any;
  public token2 : any;
  public token3 : any;
  constructor(private repo :RepositoryService,private router: Router) { }

  ngOnInit() {
    this.getAllEmployee()
   this.token= localStorage.getItem('id');
   this.token2= localStorage.getItem('pass');
   this.token3= localStorage.getItem('token');
   console.log(this.token3)
   }

  public detailsemployee( id) {
    
    this.repo.getData('')
      .subscribe(res => {
        this.router.navigate(['/profile/list',id]);
        this.result = res as Observable<Employee>;
       
       
      },
      (error) => {
       
      //  this.handleErrors(error);n
      })
  }

 

  
 public  getAllEmployee(){
    this.repo.getData('')
    .subscribe(res => {
      this.result = res ;
      var myObjStr = JSON.stringify(res);
   
     console.log(this.result.empId);
    // console.log(this.result);
      
    },
    (error) => {
    //  this.handleErrors(error);n
    })
  }

  public deleteEmployee(id){

    this.router.navigate(['/profile/delete',id]);

  }


}
