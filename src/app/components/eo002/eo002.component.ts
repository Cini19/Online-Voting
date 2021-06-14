import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Application } from 'src/app/model/EVS_TBL_Application';
import { UserService } from 'src/app/service/user.service';
import { EVS_TBL_Voter_Details } from 'src/app/model/EVS_TBL_Voter_Details';

@Component({
  selector: 'app-eo002',
  templateUrl: './eo002.component.html',
  styleUrls: ['./eo002.component.css']
})
export class EO002Component implements OnInit {
  us:UserService;
  voter:any;
  vd:EVS_TBL_Voter_Details;
  constructor(us:UserService,vd:EVS_TBL_Voter_Details
            ) { 
    this.us=us;
    this.vd=vd;
  }

  ngOnInit() {
    document.getElementById("voter").style.display="none";
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
  UserID:string;
  VoterID:string;
  ApproveEO(record:EVS_TBL_Application) {
    document.getElementById("voter").style.display="block";
    record.Passedstatus=true;
    record.VoterId=record.Userid+(Math.floor(Math.random()*98765)).toString();
    this.VoterID=record.VoterId;
    this.UserID=record.Userid;
    this.us.update_user_application(record);
    this.vd.Candidateid="";
    this.vd.Electionid="";
    this.vd.Voterid=record.VoterId;
    this.us.create_voter_details(this.vd);

  }


}
