import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { MatSnackBar, MatDialog } from '@angular/material';

import { Router, RouterEvent, NavigationEnd, Routes} from '@angular/router';
import { AreYouSureDialogComponent } from 'src/app/modals/are-you-sure-dialog/are-you-sure-dialog.component';
import { AuthService } from '../auth.service';



@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent {
  
  app_title = AppComponent.app_title;
  nav_title = "Devices";
  current_window = "";
  notif_badge_hidden = false;
  static snackbar_duration = 2000;

  route_data_dict = {
    '/home/devices' : ["Devices", 'dashboard'],
    '/home/account' : ["Account", 'account_circle'],
    '/home/settings' : ["Settings", 'settings'],
    // '/login' : ["Logout", 'exit_to_app'],
  }

  notif_list = [
    ['security', 'We have updated our privacy policy'],
    ['devices', 'New device installed'],
  ];

  public readonly route_titles = Object.keys(this.route_data_dict);

  private _dialogResult: string;
  private _logoutRoute = "/login";
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    public snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private _authService: AuthService
  ) 
  {
    //empty
  }
  
   ngOnInit()
   {
      this.router.events.pipe(
        filter((event:RouterEvent) => event instanceof NavigationEnd)
      ).subscribe(
        x => {
          if (this.route_data_dict[x.url] != undefined)
          {
            this.nav_title=this.route_data_dict[x.url][0]
          }
        }
      )
   }

  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes);
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: NavBarComponent.snackbar_duration,
    });
  }

  public notificationsClicked()
  {
    console.log("notif click registered");
  }

  public logOut()
  {
    let dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '450px',
      panelClass: 'slim-padding-dialogue',
      data: "log out"
    });

    dialogRef.afterClosed().subscribe(result => {
      this._dialogResult = result;
      if (this._dialogResult === "yes")
      {
        /* Are you sure? == yes */
        this.router.navigate([this._logoutRoute]);
        this._authService.logout();
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches)
  );

  isExtraSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
  .pipe(
    map(result => result.matches),
  )
}


