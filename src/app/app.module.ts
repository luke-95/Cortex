import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';

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
  MatDividerModule
} from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ImgCardComponent } from './img-card/img-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { SettingsComponent } from './settings/settings.component';
import { SpacesTabsComponent } from './spaces-tabs-component/spaces-tabs-component.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountPageComponent } from './account-page/account-page.component';

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
    PageNotFoundComponent,
    AccountPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ScrollDispatchModule,

    //Routing
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
