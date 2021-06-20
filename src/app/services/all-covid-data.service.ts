import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllCovidDataService {

  private _url:string="https://api.covid19api.com/summary";

  constructor(private http: HttpClient) { }

  sendData(){
    //console.log(this.http.get(this._url));
    return this.http.get(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server error");
  }

}
