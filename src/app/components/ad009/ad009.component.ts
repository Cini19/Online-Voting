import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Candidate } from 'src/app/model/EVS_TBL_Candidate';
import { AdminService } from 'src/app/service/admin.service';
import { EVS_TBL_Party } from 'src/app/model/EVS_TBL_Party';

@Component({
  selector: 'app-ad009',
  templateUrl: './ad009.component.html',
  styleUrls: ['./ad009.component.css']
})
export class AD009Component implements OnInit {
  as:AdminService;
  p:EVS_TBL_Party;
  can:EVS_TBL_Candidate;
  party:any;
  all_candidates:any;
 
  constructor(as:AdminService,p:EVS_TBL_Party,can:EVS_TBL_Candidate) {
    this.as=as;
    this.p=p;
    this.can=can;
   }

  ngOnInit() {
    document.getElementById("can").style.display="none";
    this.as.read_party().subscribe(d => {
 
      this.party = d.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          PartyId:e.payload.doc.data()['PartyId'],
          Name:e.payload.doc.data()['Name'],
          Leader:e.payload.doc.data()['Leader'],
          Symbol:e.payload.doc.data()['Symbol'],
        
        };
      })
      console.log(this.party);
 
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
PartyId:string;
 viewCandidates(pid){
   this.PartyId=pid;
  console.log(pid);
 
  document.getElementById("can").style.display="block";
  
    
  }
  
  }
