import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeviceCardComponent } from '../device-card/device-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
  cols = 2;
  cards = [
    { 
      title: 'Thermometer', 
      cols: 1, 
      rows: 1 , 
      content: ' <content> ',
      type: 'TempSensor'
    },
    { 
      title: 'Speakers', 
      cols: 1, 
      rows: 1 , 
      content: ' <content> ',
      type: 'other'
    },
    { 
      title: 'TV', 
      cols: 1, 
      rows: 1, 
      content: ' <content> ',
      type: 'other'
    },
    { 
      title: 'Security camera',
       cols: 1,
       rows: 1 , 
       content: ' <content> ',
       type: 'other'
    },
    
  ];

  constructor (private breakpointObserver: BreakpointObserver,)
  {
  }

  ngOnInit()
  {
  }

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches),
  )

  maxCardWidth$: Observable<string> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => 'width: '.concat(result.matches ? '450px' : '150px').concat(';')),
  )

}
