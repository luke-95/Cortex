import { Injectable, Inject } from '@angular/core';
import { AudioDevice } from '../../models/AudioDevice';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler-service/http-error-handler.service';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AudioDevicesService {
  private _url: string;
  private handleError: HandleError;

  
  constructor(private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string,
    httpErrorHandler: HttpErrorHandler,
  ) 
  {
    this.handleError = httpErrorHandler.createHandleError('AudioDevicesService');
    this._url = baseUrl + 'AudioDevices/';
  }

  public updateDevice(audioDevice: AudioDevice) : Observable<AudioDevice>
  {
    let url = this._url + audioDevice.Id;

    console.log("Updating audio device: " + JSON.stringify(audioDevice));
    console.log(url);

    return this.http.put<AudioDevice>(url, audioDevice, httpOptions)
    .pipe(
      catchError(this.handleError('updateAudioDevice', audioDevice))
    );
  }

}
