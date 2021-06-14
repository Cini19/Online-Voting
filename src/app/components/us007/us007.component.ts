import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Result } from 'src/app/model/EVS_TBL_Result';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-us007',
  templateUrl: './us007.component.html',
  styleUrls: ['./us007.component.css']
})
export class US007Component implements OnInit {
  as:AdminService;
  el:EVS_TBL_Election;
  result:EVS_TBL_Result;
  election:any;
  all_candidates:any;
  party:any;
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
    this.as.read_party().subscribe(d => {
 
      this.party = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          PartyId: e.payload.doc.data()['PartyId'],
          Name: e.payload.doc.data()['Name'],
          Leader: e.payload.doc.data()['Leader'],
          Symbol:e.payload.doc.data()['Symbol'],
         
        };
      })
      console.log(this.party);
 
    });
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
CANDIDATENAME:string;
PARTYNAME:string;
PARTYID:string;
CANDIDATEID:string;
WonBy:number;
Published:boolean=false;
 viewResults(eid){
   
   this.ElectionId=eid;
   this.wr.Votecount=0;
   this.wr.Candidateid="";
   this.wr.Electionid=this.ElectionId;
   this.WonBy=0;
  console.log(eid);
  for(let r of this.all_results){
    if(this.wr.Electionid==r.Electionid&&r.AdminApproval==true)
    {
      if(this.wr.Votecount<r.Votecount){
        this.wr.Candidateid=r.Candidateid;
        this.WonBy=r.Votecount-this.wr.Votecount;
        this.wr.Votecount=r.Votecount;
        this.wr.Electionid=r.Electionid;
        this.Published=true;
        console.log(this.wr);
      }
    }
  }
  if(this.Published==false){
    document.getElementById("published_result").style.display="none";

  }
  
  this.CANDIDATEID=this.wr.Candidateid;
  for(let c of this.all_candidates){
    if(this.CANDIDATEID==c.CandidateId){
      this.CANDIDATENAME=c.Name;
      this.PARTYID=c.Partyid;
    }
  }
  for(let p of this.party){
    if(this.PARTYID==p.PartyId){
      this.PARTYNAME=p.Name;
    }
  }

   document.getElementById("result").style.display="block";
  
}
  Approve(results:EVS_TBL_Result){
    results.AdminApproval=true;
    this.as.Update_result(results);
  }
  
  }
