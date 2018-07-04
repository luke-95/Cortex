import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device } from 'src/app/models/Device';
import { AuthService } from '../../auth.service';
import { HttpErrorHandler, HandleError } from 'src/app/services/http-error-handler-service/http-error-handler.service';
import { CategoriesService } from '../categories-service/categories.service';
import { AudioDevicesService } from '../audio-devices-service/audio-devices-service.service';
import { AudioDevice } from '../../models/AudioDevice';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  public devices: Device[];
  private _url: string;
  private _baseUrl: string;
  private handleError: HandleError;

  constructor(private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string,
    httpErrorHandler: HttpErrorHandler,
    private _authService: AuthService,
    private _audioDevicesService: AudioDevicesService
  )
  {
      this.handleError = httpErrorHandler.createHandleError('DevicesService');
      this._baseUrl = baseUrl;
      this._url = baseUrl + 'Devices/';
  }

  getDevices() : Observable<Device[]> {
      return this.http.get<Device[]>(this._baseUrl + "Users/" + this._authService.getLoggedUser().Id + "/Devices", httpOptions);
  }


  updateDevice(device: Device) : Observable<Device> {
    device.UserId = this._authService.getLoggedUser().Id;

    if (device.Type === "Audio")
    {
      this._audioDevicesService.updateDevice(device.AudioDevice);
    }
    
    console.log("Updating device: " + JSON.stringify(device));

    return this.http.put<Device>(`${this._url}${device.Id}`, device, httpOptions)
    .pipe(
      catchError(this.handleError('updateDevice', device))
    );
  }

  addDevice(device: Device) : Observable <Device> {
    /* generate random ID */
    device.Id = Math.floor((Math.random() * 10000000) + 100);

    /* get User ID */
    device.UserId = this._authService.getLoggedUser().Id;

    if (device.Type === "Audio" && device.AudioDevice == null)
    {
      // Generate an Audio Device
      device.AudioDevice = new AudioDevice(device.Id, 0, false);
    }

    console.log("Adding device to database: " + JSON.stringify(device) + ' At Url: ' + this._url);

    return this.http.post<Device>(this._url, device, httpOptions)
    .pipe(
      catchError(this.handleError('addDevice', device))
    )
  }

  removeDevice(device: Device) {
      this.devices.forEach( (item, index) => {
        if(item == device) this.devices.splice(index,1);
      });
  }

  removeDeviceByName(device_name: string) {
    this.devices.forEach( (item, index) => {
        if(item.Name === device_name) this.devices.splice(index,1);
    });
  }
}