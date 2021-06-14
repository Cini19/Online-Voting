import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { EVS_TBL_Election } from '../model/EVS_TBL_Election';

@Component({
  selector: 'app-ad001',
  templateUrl: './ad001.component.html',
  styleUrls: ['./ad001.component.css']
})
export class AD001Component implements OnInit {
  as:AdminService;
  el:EVS_TBL_Election;

  constructor(as:AdminService,el:EVS_TBL_Election) {
    this.as=as;
    this.el=el;
   }

  ngOnInit() {
  }
  create_el(data:EVS_TBL_Election){
    data.Electiondate=data.Electiondate.toString();
    data.Countingdate=data.Countingdate.toString();
    console.log(JSON.stringify(data))
    // this.el.Electiondate=data.Electiondate.toString();
    // this.el.Countingdate=data.Countingdate.toString();
    // this.el.ElectionId=data.ElectionId;
    // this.el.Name=data.Name;
    // this.el.District=data.District;
    // this.el.Constituency=data.Constituency;
    // console.log("El date"+this.el.Electiondate);
    //console.log("CD date"+this.el.Countingdate);
    this.as.create_election(data);

  }

}
