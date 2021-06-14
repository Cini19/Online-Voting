import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Election } from 'src/app/model/EVS_TBL_Election';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-us004',
  templateUrl: './us004.component.html',
  styleUrls: ['./us004.component.css']
})
export class US004Component implements OnInit {

  as:AdminService;
  el:EVS_TBL_Election;
  election:any;
  
  constructor(as:AdminService,el:EVS_TBL_Election) {
    this.as=as;
    this.el=el;
   }

  ngOnInit() {
    
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
  EditUpcoming(record:EVS_TBL_Election) {
    record.Upcoming=false;
    this.as.Update_Election(record); 


  }
}
