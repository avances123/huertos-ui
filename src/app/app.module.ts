import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { GridsterCompact } from 'angular-gridster2/lib/gridsterCompact.service';
import { FarmDetailComponent } from './farm-detail/farm-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    FarmDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridsterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
