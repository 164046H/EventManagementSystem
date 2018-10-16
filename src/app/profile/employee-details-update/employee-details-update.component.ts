import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService} from './../../ShareData/repository.service';
import { Router,ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee} from './../_interfaces/employee.model';
import { AuthserviceService} from './../../authservice.service';

@Component({
  selector: 'app-employee-details-update',
  templateUrl: './employee-details-update.component.html',
  styleUrls: ['./employee-details-update.component.css']
})

export class EmployeeDetailsUpdateComponent implements OnInit {

   empid:any;
  public errorMessage: string='';
  public ownerForm: FormGroup;
  public emp : any;
  constructor(private route: ActivatedRoute,private repo :RepositoryService,private router: Router,
                  private auth:AuthserviceService) { }
   
  ngOnInit() {
    this.empid = this.auth.tokencheckId();
    this.getEmployeeById();
    this.ownerForm = new FormGroup({
      id:new FormControl('',[Validators.required,Validators.maxLength(6)]),
      name:new FormControl('',[Validators.required]),
      contact:new FormControl('455',[Validators.required, Validators.pattern(/[0-9'-]$/)]),
      address:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      position:new FormControl('',[Validators.required]),
      department:new FormControl('',[Validators.required])
    }),

      this.getEmployeeById();
    }

    getEmployeeById(){
     // let ownerId: string = this.route.snapshot.params['id'];

   // let ownerByIdUrl: string = `/${ownerId}`;

    this.repo.getData(''+this.empid)
      .subscribe(res => {
          this.emp = res ;
         this.ownerForm.patchValue(res);
        },
        (error) => {
        //  this.errorHandler.handleError(error);
        //  this.errorMessage = this.errorHandler.errorMessage;
        })
    }
    
  public updateEmployee(){
   
  }
 
    public redirectToOwnerList(){
      this.router.navigate(['/profile/list']);
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
}
