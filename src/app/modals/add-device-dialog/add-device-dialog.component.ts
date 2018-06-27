import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDeviceDialogData } from '../../models/add-device-data';
import { FormControl } from '@angular/forms';
import { DevicesService } from '../../services/devices-service/devices.service';
import { Device } from 'src/app/models/Device';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.css']
})
export class AddDeviceDialogComponent implements OnInit {
  @Input() category:Category;
  public new_device_name:string;
  public new_device_type:string;
  public hide_device_token:boolean;

  constructor( 
      public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: AddDeviceDialogData,
      private _devicesService: DevicesService
  ) 
  {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }

  getDevices() {
    return this._devicesService.devices;
  }
}
