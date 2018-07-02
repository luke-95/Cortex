import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import '../models/DeviceType';
import '../models/Device';
import { DeviceType } from '../models/DeviceType';
import { Device } from '../models/Device';
import { DevicesService } from '../services/devices-service/devices.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})


export class DeviceCardComponent implements OnInit {
  @Input() device: Device;
  @Input() category: Category;
  deviceType = DeviceType;
  constructor(private breakpointObserver: BreakpointObserver,
    private _devicesService: DevicesService) {

  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches),
  )

  getTitleColor() {
    // return "red"
    return Device.getTypeColor(Device.stringToDeviceType(this.device.Type));
  }

  removeDevice() {
    this.category.removeDevice(this.device);
  }
}
