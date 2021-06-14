import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { EVS_TBL_Candidate } from 'src/app/model/EVS_TBL_Candidate';
import { EVS_TBL_Result } from 'src/app/model/EVS_TBL_Result';

@Component({
  selector: 'app-ad010',
  templateUrl: './ad010.component.html',
  styleUrls: ['./ad010.component.css']
})
export class AD010Component implements OnInit {
  as:AdminService;
  el:EVS_TBL_Election;
  result:EVS_TBL_Result;
  election:any;
  all_results:any;
  wr:EVS_TBL_Result
  constructor(as:AdminService,el:EVS_TBL_Election,result:EVS_TBL_Result,wr:EVS_TBL_Result) {
    this.as=as;
    this.el=el;
    this.result=result;
    this.wr=wr;
   }

  ngOnInit() {
    document.getElementById("result").style.display="none";
    
    
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
  
  this.as.read_result().subscribe(d => {
 
    this.all_results = d.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Electionid:e.payload.doc.data()['Electionid'],
        Candidateid: e.payload.doc.data()['Candidateid'],
        Votecount: e.payload.doc.data()['Votecount'],
        AdminApproval: e.payload.doc.data()['AdminApproval'],
        
      };
    })
    
    console.log(this.all_results);

  });
}
ElectionId:string;

 viewResults(eid){
   this.ElectionId=eid;
   this.wr.Votecount=0;
   this.wr.Candidateid="";
   this.wr.Electionid=this.ElectionId;
  console.log(eid);
  for(let r of this.all_results){
    if(this.wr.Electionid==r.Electionid)
    {
      if(this.wr.Votecount<r.Votecount){
        this.wr.Candidateid=r.Candidateid;
        this.wr.Votecount=r.Votecount;
        this.wr.Electionid=r.Electionid;
        console.log(this.wr);
      }
    }
  }
  
   document.getElementById("result").style.display="block";
  
    
  }
  Approve(r:EVS_TBL_Result){
    r.AdminApproval=true;
    this.as.Update_result(r);

  }
  
  }