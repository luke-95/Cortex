import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { User } from '../models/User';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  usernameLoginFormControl = new FormControl(0);
  passwordLoginFormControl = new FormControl(0);

  usernameRegisterFormControl = new FormControl(0);
  passwordRegisterFormControl = new FormControl(0);
  confirmPasswordRegisterFormControl = new FormControl(0);

  public readonly app_title = AppComponent.app_title;
  private home_route = '/home/devices';
  hide_login_password = true;
  hide_register_password = true;

  public logUsername: string;
  public logPassword: string;

  public regEmail: string;
  public regUsername: string;
  public regPassword: string;
  public regPasswordConf: string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    fb: FormBuilder,
    public snackBar: MatSnackBar
  ) 
  {
    this.loginForm = fb.group(
      {

      }
    );
  }

  ngOnInit() {
  }

  public isFieldInvalid(field: string) {
    let retVal = true;
    if (field == 'logUsername' && this.logUsername == undefined)
    {
      return true;
    }

    if (field == 'logPassword' && this.logPassword == undefined)
    {
      return true;
    }

    if (field == 'regUsername' && this.regUsername == undefined)
    {
      return true;
    }

    if (field == 'regPassword' && this.regPassword == undefined)
    {
      return true;
    }

    if (field == 'regPasswordConf' && this.regPasswordConf == undefined)
    {
      return true;
    }

    return retVal;
  }

  attemptLogin()
  {
    this.authService.login(this.logUsername, this.logPassword).subscribe( data => {
      if (data.Id)
      {
        this.authService.setLoginSuccessful(data, true);
        this.router.navigate([this.home_route]);
      }
      else
      {
        if (this.logUsername != undefined && this.logPassword != undefined && this.logUsername.length > 0 && this.logPassword.length > 0)
        {
          this.openSnackBar("Incorrect username and/or password", "Login failed!");
        }
        this.authService.setLoginSuccessful(null, false);
      }
    });
  }
 
  skipLogin()
  {
    this.authService.isLoggedIn = true;
    this.authService.setLoginSuccessful(new User(1, "Lucian", "tomalucian11@gmail.com"), true);
    this.router.navigate([this.home_route])
  }

  attemptRegister()
  {
    let user = new User(0, this.regUsername, this.regEmail);
    this.authService.registerUser(user, this.regPassword);
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit()
  {
    
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

}
