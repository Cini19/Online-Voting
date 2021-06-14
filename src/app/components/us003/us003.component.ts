import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-us003',
  templateUrl: './us003.component.html',
  styleUrls: ['./us003.component.css']
})
export class US003Component implements OnInit {

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
          VoterId:e.payload.doc.data()['VoterId'],

        };
      })
      
      console.log(this.voter);
 
    });
   
  }
}