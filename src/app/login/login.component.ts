import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private home_route = '/home/devices';
  hide_login_password = true;
  hide_register_password = true;

  constructor(private authService: AuthService, private router: Router) { }

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
