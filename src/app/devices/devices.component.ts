import { Component, OnInit } from '@angular/core';
import { Device } from '../models/Device';
import { DevicesService } from 'src/app/services/devices-service/devices.service';
import { FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public categories: Array<Category>;
  public devices: Array<Device>;
  public selected = new FormControl(0);

  constructor( 
    private _devicesService: DevicesService,
    private _categoriesService: CategoriesService) 
  { 
    this.categories = _categoriesService.categories;
  }

  ngOnInit() {
    this.initDevices();
  }

  initDevices()
  {
    this._devicesService.getDevices()
      .subscribe(data => {
        this.devices = data;
      });
  }

  getColorForType(Type)
  {
    return Device.getTypeColor(Device.stringToDeviceType(Type));
  }

}
