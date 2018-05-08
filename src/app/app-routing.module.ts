import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmDetailComponent }   from './farm-detail/farm-detail.component';
import { FarmListComponent }   from './farm-list/farm-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/farms', pathMatch: 'full' },
  { path: 'farms', component: FarmListComponent },
  { path: 'farm/:id', component: FarmDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

