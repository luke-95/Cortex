import { Component } from '@angular/core';
import { SwPush, SwUpdate } from "@angular/service-worker";
import { NotificationsService } from './services/notification-service/notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = "BI7foLfRQ_ZpOI9dUu8AGiH6PtAH-BFiOyzJKbEARYkbaLAvM0vYvwOyNhM5nF4nO5WCDvjn17BdZyoe1Y5szzk";

  public isLoggedIn = false;
  static app_title = 'Cortex';
  
  constructor(
    // private swUpdate: SwUpdate,
    // private swPush: SwPush,
    private _notificationsService: NotificationsService)
  {

  }

  ngOnInit() {
    // if (this.swUpdate.isEnabled) {
    //     this.swUpdate.available.subscribe(() => {
    //         if (confirm("New version available. Load New Version?")) {
    //             window.location.reload();
    //         }
    //     });
    // }
  }


  // subscribeToNotifications() {
  //   this.swPush.requestSubscription({
  //       serverPublicKey: this.VAPID_PUBLIC_KEY
  //   })
  //   .then(sub => this._notificationsService.addPushSubscriber(sub).subscribe())
  //   .catch(err => console.error("Could not subscribe to notifications", err));
  // }
  

}