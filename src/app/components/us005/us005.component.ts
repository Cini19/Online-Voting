import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { EVS_TBL_Candidate } from 'src/app/model/EVS_TBL_Candidate';

@Component({
  selector: 'app-us005',
  templateUrl: './us005.component.html',
  styleUrls: ['./us005.component.css']
})
export class US005Component implements OnInit {

  as:AdminService;
  el:EVS_TBL_Election;
  can:EVS_TBL_Candidate
  election:any;
  all_candidates:any;
 
  constructor(as:AdminService,el:EVS_TBL_Election,can:EVS_TBL_Candidate) {
    this.as=as;
    this.el=el;
    this.can=can;
   }

  ngOnInit() {
    document.getElementById("can").style.display="none";
   // document.getElementById("elect").style.display="none";
    this.as.read_election().subscribe(d => {
 
      this.election = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          ElectionId: e.payload.doc.data()['ElectionId'],
          Electiondate: e.payload.doc.data()['Electiondate'],
          Constituency:e.payload.doc.data()['Constituency'],
          Countingdate:e.payload.doc.data()['Countingdate'],
          Upcoming:e.payload.doc.data()['Upcoming'],
        };
      })
      console.log(this.election);
 
    });
  
  this.as.read_candidate().subscribe(d => {
 
    this.all_candidates = d.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        CandidateId:e.payload.doc.data()['CandidateId'],
        Name: e.payload.doc.data()['Name'],
        ElectionId: e.payload.doc.data()['ElectionId'],
        Partyid: e.payload.doc.data()['Partyid'],
        District:e.payload.doc.data()['District'],
        Constituency:e.payload.doc.data()['Constituency'],
        Dateofbirth:e.payload.doc.data()['Dateofbirth'],
        MobileNo:e.payload.doc.data()['MobileNo'],
      };
    })
    
    console.log(this.all_candidates);

  });
}
ElectionId:string;
 viewCandidates(eid){
   this.ElectionId=eid;
  console.log(eid);
 
   document.getElementById("can").style.display="block";
  
    
  }
}




