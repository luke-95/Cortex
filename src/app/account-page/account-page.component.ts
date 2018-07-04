import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  public username:string;
  public email:string;
  
  constructor(private http: HttpClient,
  private _authService: AuthService)
  {
    this.username = "";
    this.email = "";
  }

  ngOnInit() 
  {
    this.username = this._authService.getLoggedUser().Username;
    this.email = this._authService.getLoggedUser().Email;
  } 

}
