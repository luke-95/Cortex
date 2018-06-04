import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { 
  MatToolbar,   //Toolbar
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatBadgeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImgCardComponent,
    NavBarComponent,
    DashboardComponent,
    GenericTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
