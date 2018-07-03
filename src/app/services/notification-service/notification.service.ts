import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _url;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
  ) 
  {
    this._url = baseUrl + 'Notifications/';

  }

  addPushSubscriber(sub:any) {
    return this.http.post(this._url, sub);
  }

  
}
