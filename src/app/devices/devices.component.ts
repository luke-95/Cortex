import { Component, OnInit } from '@angular/core';
import { Device } from '../models/Device';
import { DevicesService } from 'src/app/services/devices-service/devices.service';

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public spaces_list = [
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

  public devices: Array<Device>;
  
  constructor( private _devicesService: DevicesService) { }

  ngOnInit() {
    this.initDevices();
  }

  initDevices()
  {

    this._devicesService.getDevices()
      .subscribe(data => {
        this.devices = data;
      });
    
    // this.devices.push(new Device("Bluetooth Speakers", DeviceType.Audio));
    // this.devices.push(new Device("Backyard Movement Sensor", DeviceType.Sensor));
    // this.devices.push(new Device("Outdoors thermometer", DeviceType.TempSensor));
    // this.devices.push(new Device("Coffee-maker", DeviceType.Appliance));
    // this.devices.push(new Device("AV-Receiver", DeviceType.Video));
    // this.devices.push(new Device("Backyard Camera", DeviceType.Security));
  }

  getColorForType(Type)
  {
    return Device.getTypeColor(Device.stringToDeviceType(Type));
  }
}
