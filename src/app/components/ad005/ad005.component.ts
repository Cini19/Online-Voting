import { Component, OnInit } from '@angular/core';
import { EVS_TBL_Party } from 'src/app/model/EVS_TBL_Party';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-ad005',
  templateUrl: './ad005.component.html',
  styleUrls: ['./ad005.component.css']
})
export class AD005Component implements OnInit {
  party:any;
  as:AdminService;
  constructor(as:AdminService) {
    this.as=as;
    
   }

  ngOnInit() {
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
  }
  
  }



