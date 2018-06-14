import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
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
