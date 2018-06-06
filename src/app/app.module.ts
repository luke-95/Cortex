import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


// import { BehaviorSubject } from 'rxjs';
// import { FlexLayoutModule } from '@angular/flex-layout';


import { 
  MatToolbar,   //Toolbar
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, MatSidenavModule, 
  MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatBadgeModule,
  MatSnackBarModule,
} from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { SettingsComponent } from './settings/settings.component';
import { SpacesTabsComponent } from './spaces-tabs-component/spaces-tabs-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImgCardComponent,
    NavBarComponent,
    DashboardComponent,
    GenericTableComponent,
    SettingsComponent,
    SpacesTabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // BehaviorSubject,
    // FlexLayoutModule,
    LayoutModule,

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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
