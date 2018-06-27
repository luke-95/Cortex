import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Device } from '../models/Device';
import { DashboardService } from '../services/dashboard-service/dashboard.service';
import { Category } from 'src/app/models/category';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddDeviceDialogComponent } from '../modals/add-device-dialog/add-device-dialog.component';
import { AccountPageComponent } from '../account-page/account-page.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
  @Input() devices: Array<Device>;
  @Input() category: Category;
  
  cols = 2;

  constructor (
    private breakpointObserver: BreakpointObserver, 
    private _dashboardService: DashboardService,
    public dialog: MatDialog)
  {

  }

  ngOnInit()
  {
    this.initDevices()
  }

  initDevices()
  {
  }

  addDevice() {
    let dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      height: '580px',
      width: '500px',
      panelClass: 'slim-padding-dialogue'
    });
  }


  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches),
  )

  maxCardWidth$: Observable<string> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => 'width: '.concat(result.matches ? '450px' : '150px').concat(';')),
  )

  isExtraSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
  .pipe(
    map(result => result.matches),
  )
}
