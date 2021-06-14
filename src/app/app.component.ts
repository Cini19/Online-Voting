import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineVoting';
  Logged:boolean;
  log:LoginService;
  r:Router;
  constructor(log:LoginService,r:Router){
    this.log=log;
    this.r=r;
  }
  ngOnInit() {
  this.Logged=this.log.getLogin();
  }
  logout(){
    this.log.setLogin(false);
    this.log.setUser("");
    this.r.navigate(['login']);
  }
}
