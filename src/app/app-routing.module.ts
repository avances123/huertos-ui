import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmDetailComponent }   from './farm-detail/farm-detail.component';
import { FarmListComponent }   from './farm-list/farm-list.component';
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { AuthRegisterComponent } from './auth-register/auth-register.component'

const routes: Routes = [
  { path: '', redirectTo: '/farms', pathMatch: 'full' },
  { path: 'farms', component: FarmListComponent },
  { path: 'farm/:id', component: FarmDetailComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'register', component: AuthRegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

