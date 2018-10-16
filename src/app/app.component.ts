import { Component,OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { AuthServiceService } from "./AuthGards/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthserviceService){}
  title = 'app';
  logged:any;
  

  showFiller = false;

  ngOnInit(){
    this.logged = this.auth.islogged();
  }
}
