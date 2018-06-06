import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material';

import { Router, RouterEvent, ActivatedRoute, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  app_title = AppComponent.app_title;
  nav_title = "Spaces";
  current_window = "";
  notif_badge_hidden = false;
  static snackbar_duration = 2000;

  title_dict = {
    '/spaces' : "Spaces",
    '/settings' : "Settings",
    '/account' : "Account"
  }

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
    private router: Router,
  ) 
  {
    
  }
  
   ngOnInit()
   {
    this.router.events.pipe(
      filter((event:RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(x => this.nav_title=this.title_dict[x.url])
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
}


