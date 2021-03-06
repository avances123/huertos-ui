import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GridsterModule } from 'angular-gridster2';
import { AppRoutingModule } from './/app-routing.module';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { GridsterCompact } from 'angular-gridster2/lib/gridsterCompact.service';
import { FarmDetailComponent } from './farm-detail/farm-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
  MatCard, MatCardModule, MatFormFieldModule,MatInputModule, MatTabsModule, MatGridListModule, MatGridList } from '@angular/material';
import { AuthLoginComponent } from './auth-login/auth-login.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    FarmDetailComponent,
    AuthLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: [],
        authScheme: 'JWT '
      }
    }),
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
    MatTabsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
