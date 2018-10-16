import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService} from './../../authservice.service';
@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.css']
})
export class LoggedHeaderComponent implements OnInit {

  constructor( private router : Router, private auth :AuthserviceService) { }

  ngOnInit() {
  }

  public  logout(){
  this.auth.loggout();
  }
}
