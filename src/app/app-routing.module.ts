import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AD001Component } from './ad001/ad001.component';
import { AD002Component } from './components/ad002/ad002.component';
import { AD003Component } from './components/ad003/ad003.component';
import { AD004Component } from './components/ad004/ad004.component';
import { AD005Component } from './components/ad005/ad005.component';
import { AD006Component } from './components/ad006/ad006.component';
import { AD007Component } from './components/ad007/ad007.component';
import { AD009Component } from './components/ad009/ad009.component';
import { AD008Component } from './components/ad008/ad008.component';
import { AD010Component } from './components/ad010/ad010.component';
import { EO001Component } from './components/eo001/eo001.component';
import { EO002Component } from './components/eo002/eo002.component';
import { US003Component } from './components/us003/us003.component';
import { US004Component } from './components/us004/us004.component';
import { US005Component } from './components/us005/us005.component';
import { US007Component } from './components/us007/us007.component';
import { US006Component } from './components/us006/us006.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'AD001',component:AD001Component},
  {path:'AD002',component:AD002Component},
  {path:'AD003',component:AD003Component},
  {path:'AD004',component:AD004Component},
  {path:'AD005',component:AD005Component},
  {path:'AD006',component:AD006Component},
  {path:'AD007',component:AD007Component},
  {path:'AD008',component:AD008Component},
  {path:'AD009',component:AD009Component},
  {path:'AD010',component:AD010Component},
  {path:'EO001',component:EO001Component},
  {path:'EO002',component:EO002Component},
  {path:'US003',component:US003Component},
  {path:'US004',component:US004Component},
  {path:'US005',component:US005Component},
  {path:'US006',component:US006Component},
  {path:'US007',component:US007Component},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
