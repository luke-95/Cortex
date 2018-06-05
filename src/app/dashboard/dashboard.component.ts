import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private breakpointObserver: BreakpointObserver,)
  {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  cards = [
    { 
      title: 'Media', 
      cols: 1, 
      rows: 1 , 
      content: 'No media devices installed.'
    },
    { 
      title: 'Security', 
      cols: 1, 
      rows: 1, 
      content: 'No security devices installed.'
    },
    { 
      title: 'Ambience',
       cols: 1,
       rows: 1 , 
       content: 'No ambience devices installed.'
      },
    { 
      title: 'Extra', 
      cols: 1, 
      rows: 1 , 
      content: 'No extra devices installed.'
    }
  ];
}
