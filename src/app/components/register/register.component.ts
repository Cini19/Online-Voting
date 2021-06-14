import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { EVS_TBL_User_Profile } from 'src/app/model/EVS_TBL_User_Profile';
import { EVS_TBL_User_Credentials } from 'src/app/model/EVS_TBL_User_Credentials';
import { EVS_TBL_Application } from 'src/app/model/EVS_TBL_Application';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  Userid:string;
  
  Password:string;
  Usertype:string="V";
  Loginstatus:boolean=false;


   up:EVS_TBL_User_Profile;
  uc:EVS_TBL_User_Credentials;
  ua:EVS_TBL_Application;
  constructor(private us:UserService ,
              up:EVS_TBL_User_Profile,
              uc:EVS_TBL_User_Credentials,
              ua:EVS_TBL_Application) {
    this.up=up;
    this.uc=uc;
    this.ua=ua;
    console.log("constructor")
   }

  ngOnInit() {
    
  }
  
  create_user(data:EVS_TBL_User_Profile){
    console.log("user function");
    this.up =new EVS_TBL_User_Profile();
    this.uc=new EVS_TBL_User_Credentials();
    
    
    this.Userid=new String(data.Firstname).substr(0,2) +Math.floor(Math.random()*753);
    console.log("User id is "+this.Userid);
    this.up.Userid=this.Userid;
   
    this.up.Firstname = data.Firstname;
    this.up.Lastname = data.Lastname;
    this.up.Dateofbirth=new String(data.Dateofbirth).toString();
    this.up.Gender=data.Gender;
    this.up.Street=data.Street;
    this.up.Location=data.Location;
    this.up.City=data.City;
    this.up.State=data.State;
    this.up.Pincode=data.Pincode;
    this.up.MobileNo=data.MobileNo;
    this.up.EmailId=data.EmailId;
    console.log("User profile data "+this.up)
    // //Credentials

    this.uc.Password=data.Password;
    this.uc.Usertype="V";
    this.uc.Loginstatus=false;
    this.uc.Userid=this.Userid;
     console.log("under create_user");
     this.us.create_user_profile(this.up);
    document.getElementById("reg").style.height="200px";
     document.getElementById("reg").innerHTML="";

     document.getElementById("reg").innerHTML="<center/>Welcome "+this.up.Firstname+"<br/> Your userid is "+this.Userid;

    this.us.create_user_cred(this.uc);

    this.ua.Userid=this.Userid;
    this.ua.VoterId="";
    this.ua.Approvedstatus=false;
    this.ua.Passedstatus=false;
    this.ua.Constituency=data.City;
    this.us.create_user_app(this.ua);

  }

}
