import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';

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

  constructor(
    private authService: AuthService, 
    private router: Router,
    fb: FormBuilder
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
    if (field == 'userName')
    {
      retVal = false;
    }
    return retVal;
  }

  attemptLogin()
  {
    this.authService.isLoggedIn = false;

    if (!this.authService.isLoggedIn) {
      console.log("Not logged in!")
    }
    
    this.router.navigate([this.home_route]);
  }

  attemptRegister()
  {

  }

  skipLogin()
  {
    this.authService.isLoggedIn = true;
    this.router.navigate([this.home_route])
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

}
