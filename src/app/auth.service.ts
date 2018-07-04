import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { HttpErrorHandler, HandleError } from 'src/app/services/http-error-handler-service/http-error-handler.service';
import { UserRegister } from './models/UserRegister';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

@Injectable()
export class AuthService {
  public isLoggedIn = false;

  private handleError: HandleError;
  private _usersUrl: string;
  private _loginUrl: string;

  private user;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string,
    httpErrorHandler: HttpErrorHandler,
  )
  {
    this._usersUrl = baseUrl + 'Users/';
    this._loginUrl = baseUrl + 'Login/';
    this.handleError = httpErrorHandler.createHandleError('DevicesService');
  }

  registerUser(user: User, pwd: string) : Observable <User> {
    /* generate ID */
    user.Id = Math.floor((Math.random() * 10000000) + 100);
    
    let userRegisterFormat = new UserRegister(user, pwd);

    console.log("Adding user to database: " + JSON.stringify(userRegisterFormat) + ' At Url: ' + this._usersUrl);

    return this.http.post<User>(this._usersUrl, userRegisterFormat, httpOptions)
    .pipe(
      catchError(this.handleError('registerUser', user))
    )
  }

  login(username, password): Observable<User> {
    if (username != undefined && password != undefined)
    {

    }
    console.log(`Attempting login for ${username}`);

    return this.http.get<User>(`${this._loginUrl}${username}/${password}` , httpOptions)
    .pipe(
      catchError(this.handleError('loginUser', username)),
    )
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  setLoginSuccessful(user, isLogged)
  {
    this.user = user;
    this.isLoggedIn = isLogged;
  }

  getLoggedUser(): User {
    return this.user;
  }
}