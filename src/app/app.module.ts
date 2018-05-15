import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { AppRoutingModule } from './/app-routing.module';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

import { AppComponent } from './app.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { GridsterCompact } from 'angular-gridster2/lib/gridsterCompact.service';
import { FarmDetailComponent } from './farm-detail/farm-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCard, MatCardModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    FarmDetailComponent,
    AppNavComponent,
    AuthLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridsterModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    LeafletModule.forRoot(),  
    LeafletDrawModule.forRoot(),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
