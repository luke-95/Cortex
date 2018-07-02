import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device } from 'src/app/models/Device';
import { AuthService } from '../../auth.service';
import { HttpErrorHandler, HandleError } from 'src/app/services/http-error-handler-service/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  public devices: Device[];
  public _url: string;
  private handleError: HandleError;

  constructor(private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string,
    private _authService: AuthService,
    httpErrorHandler: HttpErrorHandler
  )

    {
      this.handleError = httpErrorHandler.createHandleError('DevicesService');
      this._url = baseUrl + 'devices';
      
      http.get(this._url)
          .subscribe((data: Device[]) => {
          this.devices = data as Device[];
      }, error => console.error(error));
  }

  getDevices() : Observable<Device[]> {
      return this.http.get<Device[]>(this._url);
  }

  addDevice(device: Device) : Observable <Device> {
    device.Id = Math.floor((Math.random() * 10000000) + 100);
    device.UserId = this._authService.userId;
    console.log(JSON.stringify(device));
    console.log("Adding device to database: " + device + ' At Url: ' + this._url);

    return this.http.post<Device>(this._url, device, httpOptions)
    .pipe(
      catchError(this.handleError('add device', device))
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