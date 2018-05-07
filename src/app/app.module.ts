import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';


import { AppComponent } from './app.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { GridsterCompact } from 'angular-gridster2/lib/gridsterCompact.service';

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
