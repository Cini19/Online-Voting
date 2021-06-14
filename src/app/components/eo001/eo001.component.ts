import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Application } from 'src/app/model/EVS_TBL_Application';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-eo001',
  templateUrl: './eo001.component.html',
  styleUrls: ['./eo001.component.css']
})
export class EO001Component implements OnInit {
  us:UserService;
  voter:any;
  
  constructor(us:UserService
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
   
  }
  ApproveEO(record:EVS_TBL_Application) {
    record.Passedstatus=true;
    this.us.update_user_application(record);


  }

}
