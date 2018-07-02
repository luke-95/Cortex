import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { DevicesService } from 'src/app/services/devices-service/devices.service';
import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { Device } from 'src/app/models/Device';
import { Observable } from 'rxjs/internal/Observable';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categories: Array<Category>;
  private _devices: Array<Device>;

  constructor( private _devicesService: DevicesService) {
    this.categories = new Array();

    _devicesService.getDevices()
      .subscribe( data => {
        this._devices = data;
        this.categories.push(new Category('All', this._devices));
        this.categories.push(new Category('Favorites', this._devices));
        this.categories.push(new Category('Kitchen', this._devices));
        this.categories.push(new Category('Outdoors', this._devices));
        this.categories.push(new Category('My Custom Category', this._devices));
      }
    );
  }
  
  addCategory(name, fill_with_devices) {
    let category_devices: Array<Device> = new Array();
    if (fill_with_devices) {
      category_devices = this._devices;
    }
    this.categories.push(new Category(name, category_devices));
  }

  removeCategory(key) {
    this.categories.forEach( (item, index) => {
      if(item.name === key) this.categories.splice(index,1);
    });
  }

  removeDeviceFromCategory(device: Device, category: Category) {
    category.removeDevice(device);
  }

}
