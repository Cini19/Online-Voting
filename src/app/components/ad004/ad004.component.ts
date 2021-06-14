import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

import { EVS_TBL_Party } from 'src/app/model/EVS_TBL_Party';

@Component({
  selector: 'app-ad004',
  templateUrl: './ad004.component.html',
  styleUrls: ['./ad004.component.css']
})
export class AD004Component implements OnInit {

  as:AdminService;
  party:EVS_TBL_Party;

  constructor(as:AdminService,party:EVS_TBL_Party) {
    this.as=as;
    this.party=party;
   }

  ngOnInit() {
  }
  createParty(pdata:EVS_TBL_Party){
    
    console.log(JSON.stringify(pdata))
    this.as.create_party(pdata);

  }
  
}


