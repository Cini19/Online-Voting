import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private firestore: AngularFirestore) { }
  create_voter_detail(record) {
    return this.firestore.collection('EVS_TBL_Voter_Details').add(record);
  }
 
  read_voter_detail() {
    return this.firestore.collection('EVS_TBL_Voter_Details').snapshotChanges();
  }
 
  update_voter_detail(recordID,record){
    this.firestore.doc('EVS_TBL_Voter_Details/' + recordID).update(record);
  }
 
  delete_voter_detail(record_id) {
    this.firestore.doc('EVS_TBL_Voter_Details/' + record_id).delete();
  }
}

