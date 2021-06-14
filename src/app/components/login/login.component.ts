import { Component, OnInit } from '@angular/core';
import { EVS_TBL_User_Credentials } from 'src/app/model/EVS_TBL_User_Credentials';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Userid:string;
  Password:string;
  Usertype:string;
  Loginstatus:string;
  uc:EVS_TBL_User_Credentials;
  us:UserService;
  r:Router;
  log:LoginService;
  user_cred:any;
 
  constructor(us:UserService, uc:EVS_TBL_User_Credentials,r:Router,log:LoginService) {
    this.r=r; 
    this.log=log;
    this.us=us;

  }
  //if(Userid==)

  ngOnInit() {
    console.log(this.log.getLogin())
    this.us.read_user_cred().subscribe(d => {
 
      this.user_cred = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Userid:e.payload.doc.data()['Userid'],
          Password:e.payload.doc.data()['Password'],
          Usertype:e.payload.doc.data()['Usertype'],
        };
      })
      
      console.log(this.user_cred);
  
    });
  }
  User:string;
  Pass:string;
  Check(){
    
    if(this.Userid=='AD-001'&&this.Password=='AD-001'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-001');
        this.r.navigate(['AD001']);

        
      }
      else if(this.Userid=='AD-002'&&this.Password=='AD-002'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-002');
        this.r.navigate(['AD002']);
      }
      else if(this.Userid=='AD-003'&&this.Password=='AD-003'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-003');
        this.r.navigate(['AD003']);
      }
      else if(this.Userid=='AD-004'&&this.Password=='AD-004'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-004');
        this.r.navigate(['AD004']);
      }
      else if(this.Userid=='AD-005'&&this.Password=='AD-005'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-005');
        this.r.navigate(['AD005']);
      }
      else if(this.Userid=='AD-006'&&this.Password=='AD-006'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-006');
        this.r.navigate(['AD006']);
      }
      else if(this.Userid=='AD-007'&&this.Password=='AD-007'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-007');
        this.r.navigate(['AD007']);
      }
      else if(this.Userid=='AD-008'&&this.Password=='AD-008'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-008');
        this.r.navigate(['AD008']);
      }
      else if(this.Userid=='AD-009'&&this.Password=='AD-009'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-009');
        this.r.navigate(['AD009']);
      }
      else if(this.Userid=='AD-010'&&this.Password=='AD-010'&&this.Usertype=='A'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('AD-010');
        this.r.navigate(['AD010']);
      }
      else if(this.Userid=='EO-001'&&this.Password=='EO-001'&&this.Usertype=='E'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('EO-001');
        this.r.navigate(['EO001']);
      }
      else if(this.Userid=='EO-002'&&this.Password=='EO-002'&&this.Usertype=='E'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('EO-002');
        this.r.navigate(['EO002']);
      }
      else if(this.Userid=='US-003'&&this.Password=='US-003'&&this.Usertype=='V'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('US-003');
        this.r.navigate(['US003']);
      }
      else if(this.Userid=='US-004'&&this.Password=='US-004'&&this.Usertype=='V'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('US-004');
        this.r.navigate(['US004']);
      }
      else if(this.Userid=='US-005'&&this.Password=='US-005'&&this.Usertype=='V'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('US-005');
        this.r.navigate(['US005']);
      }
      
      else if(this.Userid=='US-007'&&this.Password=='US-007'&&this.Usertype=='V'){
        document.getElementById("log").style.display="none";
        this.log.setLogin(true);
        this.log.setUser('US-007');
        this.r.navigate(['US007']);
      }
      else{
        for(let usc of this.user_cred){
          console.log(JSON.stringify(usc));
          if(this.Userid==usc.Userid&&this.Password==usc.Password&&this.Usertype=='V'){
            document.getElementById("log").style.display="none";
            this.log.setLogin(true);
            this.log.setUser(this.Userid);
            this.r.navigate(['US006']);
          }
         }
        if(this.log.getLogin()==false){ 
        alert("Invalid Username or password")
        }
      }
      

}
}