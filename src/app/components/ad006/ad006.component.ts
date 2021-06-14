import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { EVS_TBL_Candidate } from 'src/app/model/EVS_TBL_Candidate';
import { EVS_TBL_Result } from 'src/app/model/EVS_TBL_Result';

@Component({
  selector: 'app-ad006',
  templateUrl: './ad006.component.html',
  styleUrls: ['./ad006.component.css']
})
export class AD006Component implements OnInit {
  as:AdminService;
  el:EVS_TBL_Election;
  election:any;
  result:EVS_TBL_Result;
  constructor(as:AdminService,el:EVS_TBL_Election,result:EVS_TBL_Result) {
    this.as=as;
    this.el=el;
    this.result=result;
   }

  ngOnInit() {
    document.getElementById("addC").style.display="none";
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
  }

 
  Electonid :string;
 
  Constituency :string;
  
  candidate:EVS_TBL_Candidate;
    
  addCandidate(el:EVS_TBL_Election){
    
    document.getElementById("addC").style.display="block";
  //  this.candidate.Electionid=el.ElectionId;
  this.Electonid=el.ElectionId;
  this.Constituency=el.Constituency;
  console.log("Election ID"+this.Electonid);

  }
  
  CreateCandidate(cform:EVS_TBL_Candidate){
    console.log(this.Electonid);
    cform.ElectionId=this.Electonid.toString();
    cform.Constituency=this.Constituency.toString();
 
     cform.Dateofbirth=cform.Dateofbirth.toString();
    console.log(cform);
    this.result.Candidateid=cform.CandidateId;
    this.result.Electionid=cform.ElectionId;
    this.result.Votecount=0;
    this.result.AdminApproval=false;
    this.as.create_candidate(cform);
    this.as.create_result(this.result);

  }
}


