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
        this.initCategories();
      }
    );
  }

  initCategories() {
    /* ALL Category */
    this.categories.push(new Category('All', this._devices));
    
    /* Favorites Category */
    let fav_categ_index = (this.categories.push(new Category('Favorites', []))) - 1;
    for (var _i = 0; _i < this._devices.length; _i++) {
      let device:Device = this._devices[_i];
      if (device.IsFavorite) {
        this.categories[fav_categ_index].devices.push(device);
      }
    }

    /* Other Categories */
    console.log(this._devices);
    for (var _i = 0; _i < this._devices.length; _i++) {
      let device:Device = this._devices[_i];

      let category_for_device = this.categories.find(categ => categ.name === device.Category);
      if (category_for_device != undefined) {
        category_for_device.addDevice(device);
      } else {
        let new_category_index = this.addCategory(device.Category, false) - 1;
        this.categories[new_category_index].addDevice(device);
      }
    }

  }
  
  addCategory(name, fill_with_devices) {
    let category_devices: Array<Device> = new Array();
    if (fill_with_devices) {
      category_devices = this._devices;
    }
    let new_category = new Category(name, category_devices)
    return this.categories.push(new_category);;
  }

  updateFavorites(device) {
    let favorite_category = this.categories.find(categ => categ.name === "Favorites");
    if (!device.IsFavorite) {
      favorite_category.removeDevice(device);
    }
    else
    {
      favorite_category.addDevice(device);
    }
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
