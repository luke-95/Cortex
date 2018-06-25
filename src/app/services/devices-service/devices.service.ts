import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device } from 'src/app/models/Device';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  public devices: Device[];
  public _url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
      this._url = baseUrl + 'devices';
      
      http.get(this._url)
          .subscribe((data: Device[]) => {
          this.devices = data as Device[];
          console.log(this.devices);
      }, error => console.error(error));
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

  getDevices() : Observable<Device[]> {
      return this.http.get<Device[]>(this._url);
  }

  addDevice(device: Device) : Observable <Device> {
      console.log(device);
      console.log(this._url);

      return this.http.post<Device>(this._url, device, httpOptions)
          .pipe (
              catchError(this.handleError)
          )
  }
}