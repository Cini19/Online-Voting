import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AdminService } from 'src/app/service/admin.service';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { EVS_TBL_Candidate } from 'src/app/model/EVS_TBL_Candidate';
import { EVS_TBL_Voter_Details } from 'src/app/model/EVS_TBL_Voter_Details';
import { EVS_TBL_Result } from 'src/app/model/EVS_TBL_Result';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-us006',
  templateUrl: './us006.component.html',
  styleUrls: ['./us006.component.css']
})
export class US006Component implements OnInit {
  as:AdminService;
  el:EVS_TBL_Election;
  can:EVS_TBL_Candidate;
  election:any;
  all_candidates:any;
  us:UserService;
  result:EVS_TBL_Result;
  all_results:any;
  voter:any;
  r:Router;
  log:LoginService;
  vd:EVS_TBL_Voter_Details=new EVS_TBL_Voter_Details();
  constructor(as:AdminService,
            el:EVS_TBL_Election,
            us:UserService,
            log:LoginService,
            r:Router,
            can:EVS_TBL_Candidate,
            vd:EVS_TBL_Voter_Details,
            result:EVS_TBL_Result) {
    this.as=as;
    this.el=el;
    this.can=can;
    this.vd=vd;
    this.us=us;
    this.result=result;
    this.log=log;
    this.r=r;
   }

  ngOnInit() {
    document.getElementById("can").style.display="none";
    document.getElementById("elect").style.display="none";
    
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
  this.as.read_result().subscribe(d => {
 
    this.all_results = d.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Electionid: e.payload.doc.data()['Electionid'],
        Candidateid: e.payload.doc.data()['Candidateid'],
        Votecount: e.payload.doc.data()['Votecount'],
        AdminApproval:e.payload.doc.data()['AdminApproval']
      };
    })
    console.log(this.all_results);

  });

}
ElectionId:string;
 viewCandidates(eid){
   this.ElectionId=eid;
  console.log(eid);
  for(let r of this.all_results){
    if(eid==r.Electionid){
      if(r.AdminApproval==true){
        alert("This election result was declared already");
        this.log.setLogin(false);
        this.r.navigate(['login']);
      }
      
    }
  }
  document.getElementById("can").style.display="block";
  
    
  }
  VOTERID:string;
  VOTECOUNT:number;
  Approved:boolean=false;
  u:boolean=false;
  v:boolean=false;
  allowVoting(data){
    if(this.log.getLogin()==false){
      alert("Please login to proceed");
      this.r.navigate(['login']);
    }
    
    for(let v of this.voter){
      if(v.Userid==this.log.getUser()){
        this.u=true;
        if(v.VoterId==data.Voterid){
        this.VOTERID=data.Voterid;
        
        document.getElementById("elect").style.display="block";
        this.v=true;
        break;
        }
        
      }}
      if(this.u==false){
        alert("Invalid User please login");
        this.r.navigate(['login']);
      }
      if(this.v==false){
        alert("Wrong Voter ID")
      }
    }
    
  voted:boolean=false;
  Vote(candidate:EVS_TBL_Candidate){
    this.vd.Voterid=this.VOTERID;
    this.vd.Candidateid=candidate.CandidateId;
    this.vd.Electionid=candidate.ElectionId;
    console.log(this.vd);
    for(let r of this.all_results){
      if(candidate.CandidateId==r.Candidateid){
        this.VOTECOUNT=r.Votecount;
        console.log(this.VOTECOUNT);
        this.voted=true;
        
      }
    }
    this.us.update_voter_details(this.vd);
    this.result.Candidateid=candidate.CandidateId;
    this.result.Electionid=candidate.ElectionId;
    this.result.Votecount=this.VOTECOUNT+1;
    this.result.AdminApproval=false;
    this.as.Update_result(this.result);
    //this.result.Votecount=

  }
  }

  
  
