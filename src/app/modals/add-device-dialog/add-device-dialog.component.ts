import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDeviceDialogData } from '../../models/add-device-data';
import { FormControl } from '@angular/forms';
import { DevicesService } from '../../services/devices-service/devices.service';
import { Device } from 'src/app/models/Device';
import { Category } from 'src/app/models/category';
import { DeviceType } from '../../models/DeviceType';
import { AudioDevice } from 'src/app/models/AudioDevice';

@Component({
  selector: 'add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.css']
})
export class AddDeviceDialogComponent implements OnInit {
  @Input() category: Category;
  
  public new_device_name:string;
  public new_device_type:string;
  public selected_existing_device_name: string;
  public hide_device_token:boolean;
  public is_new: boolean;
  public types: Array<string>;

  constructor( 
      public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private _devicesService: DevicesService
  ) 
  {
    this.category = this.data.category;
    this.types = Object.keys(DeviceType);
    this.new_device_type = "";
    this.hide_device_token = true;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.is_new) 
    {
      // New Device

      if (this.new_device_name.length > 0 && this.new_device_type.length > 0)
      {
        let new_device = new Device(0, this.new_device_name, this.new_device_type);
        
        if (new_device.Type === "Audio")
        {
          // Generate an Audio Device
          new_device.AudioDevice = new AudioDevice(new_device.Id, 0, false);
        }
    
        this.category.addDevice(new_device);
        this._devicesService.addDevice(new_device);
      }
    } 
    else 
    {
      // Existing Device
      let selected_device = this._devicesService.devices.find(device => device.Name === this.selected_existing_device_name);
      this.category.devices.push(selected_device);
    }

    this.dialogRef.close();
  }

  getDevices() {
    return this._devicesService.devices;
  }

  setIsNew(is_new: boolean) {
    console.log("Is New: " + is_new);
    this.is_new = is_new;
  }
}
