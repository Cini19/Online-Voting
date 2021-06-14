import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/firestore';
import { EVS_TBL_Election } from '../model/EVS_TBL_Election';
import { EVS_TBL_Party } from '../model/EVS_TBL_Party';
import { EVS_TBL_Candidate } from '../model/EVS_TBL_Candidate';
import { EVS_TBL_Result } from '../model/EVS_TBL_Result';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  eladd:EVS_TBL_Election;
  constructor(private firestore: AngularFirestore) { }
  create_election(data:EVS_TBL_Election) {
    var fbase=this.firestore.collection('EVS_TBL_Election').doc(data.ElectionId);
     fbase.set({
       ElectionId:data.ElectionId,
       Name:data.Name,
       Electiondate:data.Electiondate,
       District:data.District,
       Constituency:data.Constituency,
       Countingdate:data.Countingdate,
       Upcoming:true,

//this.firestore.collection('EVS_TBL_Election').add(data);
     });
     alert("success");
  }
  read_election(){
    return this.firestore.collection('EVS_TBL_Election').snapshotChanges();
  }
  Update_Election(record:EVS_TBL_Election){
    this.firestore.doc('EVS_TBL_Election/' + record.ElectionId).update(record)

  }
  create_party(pdata:EVS_TBL_Party) {
    var fbase=this.firestore.collection('EVS_TBL_Party').doc(pdata.PartyId);
     fbase.set({
        PartyId:pdata.PartyId,
        Name:pdata.Name,
        Leader:pdata.Leader,
        Symbol:pdata.Symbol,
     });
     alert("success");
  
  }
  read_party(){
    return this.firestore.collection('EVS_TBL_Party').snapshotChanges();
  }
 create_candidate(cdata:EVS_TBL_Candidate){
   console.log("cdata"+JSON.stringify(cdata));
  var fbase=this.firestore.collection('EVS_TBL_Candidate').doc(cdata.CandidateId).set(cdata);
  //this.firestore.collection('EVS_TBL_Candidate')
  // fbase.set({
  //    CandidateId:cdata.CandidateId,
  //    Name:cdata.Name,
  //    ElectionId:cdata.ElectionId,
  //    PartyId:cdata.PartyId,
  //    District:cdata.District,
  //    Constituency:cdata.Constituency,
  //    Dateofbirth:cdata.Dateofbirth,
  //    MobileNo:cdata.MobileNo,
     
  // });
  alert("success");

 }
 read_candidate(){
  return this.firestore.collection('EVS_TBL_Candidate').snapshotChanges();
}
create_result(rdata:EVS_TBL_Result){
  console.log("cdata"+JSON.stringify(rdata));
 var fbase=this.firestore.collection('EVS_TBL_Result').doc(rdata.Candidateid);
 fbase.set({
  Electionid:rdata.Electionid,
  Candidateid:rdata.Candidateid,
  Votecount:rdata.Votecount,
  AdminApproval:rdata.AdminApproval,
 });
 
 alert("success");

}
read_result(){
  return this.firestore.collection('EVS_TBL_Result').snapshotChanges();
}
Update_result(rdata:EVS_TBL_Result){
  this.firestore.doc('EVS_TBL_Result/' + rdata.Candidateid).set({
    Electionid:rdata.Electionid,
    Candidateid:rdata.Candidateid,
    Votecount:rdata.Votecount,
    AdminApproval:rdata.AdminApproval,
  });

}
}
