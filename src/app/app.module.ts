import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './service/user.service';
import { VoterService } from './service/voter.service';
import { AdminService } from './service/admin.service';
import { EOService } from './service/eo.service';

import { EVS_TBL_User_Credentials } from './model/EVS_TBL_User_Credentials';
import { EVS_TBL_User_Profile } from './model/EVS_TBL_User_Profile';
import {EVS_TBL_Election} from './model/EVS_TBL_Election';
import {EVS_TBL_EO} from './model/EVS_TBL_EO';
import {EVS_TBL_Application} from './model/EVS_TBL_Application';
import {EVS_TBL_Candidate} from './model/EVS_TBL_Candidate';
import {EVS_TBL_Party} from './model/EVS_TBL_Party';
import {EVS_TBL_Result} from './model/EVS_TBL_Result';
import {EVS_TBL_Voter_Details} from './model/EVS_TBL_Voter_Details';


import { AD001Component } from './ad001/ad001.component';
import { from } from 'rxjs';
import { AD002Component } from './components/ad002/ad002.component';
import { AD003Component } from './components/ad003/ad003.component';
import { AD004Component } from './components/ad004/ad004.component';
import { AD005Component } from './components/ad005/ad005.component';
import { AD006Component } from './components/ad006/ad006.component';
import { AD007Component } from './components/ad007/ad007.component';
import { AD008Component } from './components/ad008/ad008.component';
import { AD009Component } from './components/ad009/ad009.component';
import { AD010Component } from './components/ad010/ad010.component';
import { EO001Component } from './components/eo001/eo001.component';
import { EO002Component } from './components/eo002/eo002.component';
import { US003Component } from './components/us003/us003.component';
import { US004Component } from './components/us004/us004.component';
import { US005Component } from './components/us005/us005.component';
import { US007Component } from './components/us007/us007.component';
import { US006Component } from './components/us006/us006.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AD001Component,
    AD002Component,
    AD003Component,
    AD004Component,
    AD005Component,
    AD006Component,
    AD007Component,
    AD008Component,
    AD009Component,
    AD010Component,
    EO001Component,
    EO002Component,
    US003Component,
    US004Component,
    US005Component,
    US007Component,
    US006Component


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [UserService,
              VoterService,
              AdminService,
              EOService,
              LoginService,
              EVS_TBL_User_Credentials,
              EVS_TBL_User_Profile,
              EVS_TBL_Election,
              EVS_TBL_Application,
              EVS_TBL_Candidate,RegisterComponent,
              EVS_TBL_EO,
              EVS_TBL_Party,
              EVS_TBL_Result,
              EVS_TBL_Voter_Details
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
