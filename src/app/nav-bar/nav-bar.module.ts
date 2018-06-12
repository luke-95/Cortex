import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
 
 
// import { NavBarRoutingModule } from './nav-bar-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from '../account-page/account-page.component';
import { SettingsComponent } from '../settings/settings.component';
import { DevicesComponent } from '../spaces-tabs-component/spaces-tabs-component.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { 
  MatIconModule, 
  MatSidenavModule, 
  MatToolbarModule,
  MatCardModule, 
  MatButtonModule, 
  MatGridListModule, 
  MatListModule, 
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
  MatSelectModule
 } from '@angular/material';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
 
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // NavBarRoutingModule,

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
    
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [NavBarComponent],
  providers: [AuthGuard, AuthService]
})
export class NavBarModule {}