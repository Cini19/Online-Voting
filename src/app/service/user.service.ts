import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EVS_TBL_User_Profile } from '../model/EVS_TBL_User_Profile';
import { EVS_TBL_User_Credentials } from '../model/EVS_TBL_User_Credentials';
import { EVS_TBL_Application } from '../model/EVS_TBL_Application';
import { EVS_TBL_Voter_Details } from '../model/EVS_TBL_Voter_Details';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData:EVS_TBL_User_Profile;
  data:EVS_TBL_User_Credentials;
  adata:EVS_TBL_Application;
  productsRef: AngularFirestoreCollection<EVS_TBL_User_Profile>;
  successMsg = 'Data successfully saved.';



  constructor(private firestore: AngularFirestore) { }
  create_user_cred(data:EVS_TBL_User_Credentials) {
    var fbase=this.firestore.collection(' EVS_TBL_User_Credentials ').doc(data.Userid);
    fbase.set({
      Userid:data.Userid,
      Password:data.Password,
      Loginstatus:data.Loginstatus,
      Usertype:data.Usertype

    });
  }
 
  read_user_cred() {
      return this.firestore.collection(' EVS_TBL_User_Credentials ').snapshotChanges();
    }
 
  update_user_cred(recordID,record){
    this.firestore.doc(' EVS_TBL_User_Credentials /' + recordID).update(record);
  }
 
  delete_user_cred(record_id) {
    this.firestore.doc(' EVS_TBL_User_Credentials /' + record_id).delete();
  }
  create_user_profile(formData:EVS_TBL_User_Profile) {
    var fbase=this.firestore.collection(' EVS_TBL_User_Profile ').doc(formData.Userid);
     fbase.set({
      Userid:formData.Userid,
      Firstname:formData.Firstname,
      Lastname:formData.Lastname,
      Gender:formData.Gender,
      Dateofbirth:formData.Dateofbirth,
      Street :formData.Street,
      State:formData.State,
      Location:formData.Location,
      City:formData.City,
      Pincode:formData.Pincode,
      //Password:formData.Password,
      EmailId:formData.EmailId,
      MobileNo:formData.MobileNo,

    })

    }
  //}
 
  read_user_profile() {
    return this.firestore.collection(' EVS_TBL_User_Profile ').snapshotChanges();
  }
 
  update_user_profile(recordID,record){
    this.firestore.doc(' EVS_TBL_User_Profile /' + recordID).update(record);
  }
 
  delete_user_profile(record_id) {
    this.firestore.doc(' EVS_TBL_User_Profile /' + record_id).delete();
  }
  
  create_user_app(adata:EVS_TBL_Application){
      var fbase=this.firestore.collection('EVS_TBL_Application').doc(adata.Userid);
      fbase.set({
        Userid:adata.Userid,
        Approvedstatus:adata.Approvedstatus,
        Passedstatus:adata.Passedstatus,
        VoterId:adata.VoterId,
        Constituency:adata.Constituency,
  
      });
  }
  read_user_application() {
    return this.firestore.collection('EVS_TBL_Application').snapshotChanges();
  }
  update_user_application(adata:EVS_TBL_Application){
    this.firestore.doc('EVS_TBL_Application/'+adata.Userid).update(adata);
  }
  create_voter_details(vdata:EVS_TBL_Voter_Details){
    var fbase=this.firestore.collection('EVS_TBL_Voter_Details').doc(vdata.Voterid);
    fbase.set({
      Candidateid:vdata.Candidateid,
      Electionid:vdata.Electionid,
      Voterid:vdata.Voterid,
    });
  }
  update_voter_details(vdata:EVS_TBL_Voter_Details){
    console.log(JSON.stringify(vdata.Voterid))
    //console.log(vdata.VoterId)
    this.firestore.doc('EVS_TBL_Voter_Details/'+vdata.Voterid).set({
      Candidateid:vdata.Candidateid,
      Electionid:vdata.Electionid,
      Voterid:vdata.Voterid,
    });
  }
  read_voter_details() {
    return this.firestore.collection('EVS_TBL_Voter_Details').snapshotChanges();
  }
}
  


