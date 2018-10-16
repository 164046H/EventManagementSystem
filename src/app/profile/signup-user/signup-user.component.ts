import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee} from './../_interfaces/employee.model';
import {  RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';


export interface departments {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  public errorMessage: string='';
  public ownerForm: FormGroup;
  
  animals: any = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  constructor(private router: Router,  private repository : RepositoryService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      contact:new FormControl('',[Validators.required, Validators.pattern(/[0-9'-]$/)]),
      address:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      position:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      department:new FormControl('',[Validators.required]),
      id:new FormControl('',[Validators.required,Validators.maxLength(6)])
      
      

    })
  }

  public validateControl(controlName: string) {
    if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.ownerForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public createOwner(ownerFormValue) {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
      console.log(this.ownerForm);
    }
  }

  private executeOwnerCreation(ownerFormValue) {
    let owner: Employee = {
      EmpId: ownerFormValue.id,
      EmpName: ownerFormValue.name,
      EmpContact: ownerFormValue.contact,
      EmpAddress: ownerFormValue.address,
      EmpEmail: ownerFormValue.email,
      PositionPId: ownerFormValue.position,
      EmpPassword:  ownerFormValue.password,
      DepartmentDprtId: ownerFormValue.department,
    };

    let apiUrl = 'create';
    this.repository.create(apiUrl, owner)
      .subscribe(res => {
        this.router.navigate(['/profile/login']);
          
        },
        (error => {
        //  this.errorHandler.handleError(error);
        //  this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  public redirectToOwnerList(){
    this.router.navigate(['/profile/list']);
  }
  
}
