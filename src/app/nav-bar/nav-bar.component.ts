import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material';

import { Router} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  title = AppComponent.nav_bar_title;
  notif_badge_hidden = false;
  static snackbar_duration = 2000;

  notif_list = [
    ['devices', 'New device installed'],
    ['security', 'We have updated our privacy policy'],
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches)
  );
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    public snackBar: MatSnackBar,
  ) { }


  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: NavBarComponent.snackbar_duration,
    });
  }

  public notificationsClicked()
  {
    console.log("notif click registered");
  }
}


