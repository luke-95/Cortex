import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device } from 'src/app/models/Device';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
};


@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    }
}

// export interface Device {
//     Id : string;
//     Name : string;
// }