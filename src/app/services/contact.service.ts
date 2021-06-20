import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactModel } from 'src/app/models/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // public _url="http://localhost:8000/";
  public _url="/";

  constructor(private _http: HttpClient) { }
  dataToServer(contact: ContactModel){
    // const headers = { 'content-type': 'application/json'} 
    // const body=JSON.stringify(contact);
    return this._http.post<any>(this._url,contact).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
