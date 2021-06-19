import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  throwError
} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CovidData } from '../interfaces/covidData';

@Injectable({
  providedIn: 'root'
})
export class AllCovidDataService {

  private _url:string="https://api.covid19api.com/summary";

  constructor(private http: HttpClient) { }

  sendData1(): Observable<CovidData[]>{
    return this.http.get<CovidData[]>(this._url).pipe(catchError(this.errorHandler));
  }
  sendData(){
    //console.log(this.http.get(this._url));
    return this.http.get(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server error");
  }

}
