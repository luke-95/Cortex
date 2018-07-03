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
import { CategoriesService } from '../services/categories-service/categories.service';

enum FavIcons {
  favorite = "star",
  not_favorite = "star_border"
}

@Component({
  selector: 'device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css'],
})

export class DeviceCardComponent implements OnInit {
  @Input() device: Device;
  @Input() category: Category;
  public show_remove_menu: boolean;
  public show_favorites_button: boolean;
  public remove_item_text: string;
  public deviceType = DeviceType;

  public fav_button_text: string;
  // public fav_button_color: string;

  constructor(private breakpointObserver: BreakpointObserver,
    private _categoriesService: CategoriesService,
    private _devicesService: DevicesService
  )
  {
    this.show_remove_menu = false;
    this.show_favorites_button = true;
    this.fav_button_text = FavIcons.not_favorite;
    // this.fav_button_color = FavIconColors.not_favorite;
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.show_remove_menu = this.category.name === "All" ? false : true;
    this.show_favorites_button = this.category.name === "Favorites" ? false : true;
    this.updateLabels();
  }

  toggleFavorite() {
    this.device.IsFavorite = !this.device.IsFavorite;
    this.updateLabels();
    this._categoriesService.updateFavorites(this.device);
    this._devicesService.updateDevice(this.device);
  }

  updateLabels() {
    this.fav_button_text = this.device.IsFavorite ? FavIcons.favorite : FavIcons.not_favorite;
    // this.fav_button_color =  this.device.IsFavorite ? FavIconColors.not_favorite : FavIconColors.not_favorite;
    // this.fav_button_color =  this.device.IsFavorite ? FavIconColors.favorite : FavIconColors.not_favorite;
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
