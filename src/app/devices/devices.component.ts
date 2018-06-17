import { Component, OnInit } from '@angular/core';
import { DeviceType } from '../models/DeviceType';
import { Device } from '../models/Device';

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  spaces_list = [
    {
      title: 'Favorites',
      content: '<app-dashboard></app-dashboard>',
    },
    {
      title: 'All',
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
      title: 'My Custom Category',
      content: '<app-dashboard></app-dashboard>',
    },
  ]

  public devices:Array<Device> = [];
  
  constructor() { }

  ngOnInit() {
    this.initDevices();
    console.log(this.devices);
  }

  initDevices()
  {
    this.devices.push(new Device("Bluetooth Speakers", DeviceType.Audio));
    this.devices.push(new Device("Backyard Movement Sensor", DeviceType.Sensor));
    this.devices.push(new Device("Outdoors thermometer", DeviceType.TempSensor));
    this.devices.push(new Device("Coffee-maker", DeviceType.Appliance));
    this.devices.push(new Device("AV-Receiver", DeviceType.Video));
    this.devices.push(new Device("Backyard Camera", DeviceType.Security));
  }

  getColorForType(type:DeviceType)
  {
    return Device.getTypeColor(type);
  }
}
