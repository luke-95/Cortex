import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Third-party modules
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';


// Project modules
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

// Project components
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginComponent } from './login/login.component';

//Material modules
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { 
  MatToolbar,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, MatSidenavModule, 
  MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatInputModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DeviceCardComponent } from './device-card/device-card.component';
import { TempSensorComponent } from './device-card/temp-sensor/temp-sensor.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    DevicesComponent,
    PageNotFoundComponent,
    AccountPageComponent,
    LoginComponent,
    DeviceCardComponent,
    TempSensorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    
    // Custom Modules
    NavBarModule,

    //Routing Modules
    AppRoutingModule,
    
    //Material Modules
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,

    //Other Modules
    // NgxChartsModule
    ChartsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
