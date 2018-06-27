import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:52932/api/blogs').subscribe(
      data => {
        console.log(data);
      })
  } 

}
