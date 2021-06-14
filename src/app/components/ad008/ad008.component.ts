import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { EVS_TBL_Application } from 'src/app/model/EVS_TBL_Application';

import { AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase';


@Component({
  selector: 'app-ad008',
  templateUrl: './ad008.component.html',
  styleUrls: ['./ad008.component.css']
})
export class AD008Component implements OnInit {
  us:UserService;
  voter:any;
  vp:any;
  
  constructor(us:UserService,private firestore: AngularFirestore
            ) { 
    this.us=us;
  }

  ngOnInit() {
    this.us.read_user_application().subscribe(d=>{
      this.voter = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Userid: e.payload.doc.data()['Userid'],
          Constituency: e.payload.doc.data()['Constituency'],
          Passedstatus: e.payload.doc.data()['Passedstatus'],
          Approvedstatus:e.payload.doc.data()['Approvedstatus'],

        };
      })
      
      console.log(this.voter);
 
    });
    this.us.read_user_profile().subscribe(d=>{
      this.vp = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Userid: e.payload.doc.data()['Userid'],
          Firstname:e.payload.doc.data()['Firstname'],
          Lastname:e.payload.doc.data()['Lastname'],
          Dateofbirth:e.payload.doc.data()['Dateofbirth'],
          Gender:e.payload.doc.data()['Gender'],
        };
      })
      
      console.log(this.voter);
 
    });
  }
  ApproveAdmin(record:EVS_TBL_Application) {
    record.Approvedstatus=true;
    this.us.update_user_application(record);


  }
  
  


}

