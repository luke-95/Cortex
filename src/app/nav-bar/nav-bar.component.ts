import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material';

import { Router, RouterEvent, NavigationEnd, Routes} from '@angular/router';



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
    '/login' : ["Logout", 'exit_to_app'],
  }

  notif_list = [
    ['security', 'We have updated our privacy policy'],
    ['devices', 'New device installed'],
  ];


  private readonly route_titles = Object.keys(this.route_data_dict);

  constructor(
    private breakpointObserver: BreakpointObserver,
    public snackBar: MatSnackBar,
    private router: Router,
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
          this.nav_title=this.route_data_dict[x.url][0]
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches)
  );
}


