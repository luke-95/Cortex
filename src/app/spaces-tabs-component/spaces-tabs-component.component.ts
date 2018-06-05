import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spaces-tabs-component',
  templateUrl: './spaces-tabs-component.component.html',
  styleUrls: ['./spaces-tabs-component.component.css']
})
export class SpacesTabsComponent implements OnInit {
  spaces_list = [
    {
      title: 'Bedroom',
      content: '<app-dashboard></app-dashboard>',
    },
    {
      title: 'Living room',
      content: '<app-dashboard></app-dashboard>',
    },
    {
      title: 'Kitchen',
      content: '<app-dashboard></app-dashboard>',
    },
    {
      title: 'Outdoors',
      content: '<app-dashboard></app-dashboard>',
    },
    {
      title: 'Garage',
      content: '<app-dashboard></app-dashboard>',
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
