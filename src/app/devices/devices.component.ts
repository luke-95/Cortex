import { Component, OnInit } from '@angular/core';
import { Device } from '../models/Device';
import { DevicesService } from 'src/app/services/devices-service/devices.service';
import { FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { Category } from 'src/app/models/category';
import { MatDialog, MatTabChangeEvent } from '@angular/material';
import { AddFilterDialogComponent } from '../modals/add-filter-dialog/add-filter-dialog.component';

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public categories: Array<Category>;
  public devices: Array<Device>;
  public selected = new FormControl(0);
  public active_filters: Array<string>;
  public hide_chips = true;

  constructor( 
    private _devicesService: DevicesService,
    private _categoriesService: CategoriesService,
    public dialog: MatDialog) 
  { 
    this.categories = new Array<Category>();
    this.devices = new Array<Device>();
    this.active_filters = [];
  }

  ngOnInit() {
    this.categories = this._categoriesService.categories;
    this.initDevices();
  }

  initDevices()
  {
    this._devicesService.getDevices()
      .subscribe(data => {
        this.devices = data;
        this.hide_chips = false;
        this.active_filters = this.categories[this.selected.value].filters;
      });
  }

  addFilter()
  {
    let current_category = this._categoriesService.categories[this.selected.value];
    this.dialog.open(AddFilterDialogComponent, {
      height: '240px',
      width: '400px',
      panelClass: 'slim-padding-dialogue',
      data: {
        category: current_category
      }
    });
  }

  public tabChanged(event: MatTabChangeEvent)
  {
    this.removeAllFilters();
  }

  removeAllFilters()
  {
    let current_category = this._categoriesService.categories[this.selected.value];
    current_category.removeAllFilters();
    this.active_filters = this.categories[this.selected.value].filters;
  }

  removeFilter(filter) {
    let current_category = this._categoriesService.categories[this.selected.value];
    current_category.removeFilter(filter);
    this.active_filters = this.categories[this.selected.value].filters;
  }

  getColorForType(Type)
  {
    return Device.getTypeColor(Device.stringToDeviceType(Type));
  }

  

}
