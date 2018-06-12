import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private isFieldInvalid(field: string) {
    let retVal = true;
    if (field == 'userName')
    {
      retVal = false;
    }
    return retVal;
  }

  attemptLogin()
  {
    this.authService.isLoggedIn = true;

    if (!this.authService.isLoggedIn) {
      console.log("Not logged in!")
    }
    
    this.router.navigate(['/home/devices']);
  }

}
