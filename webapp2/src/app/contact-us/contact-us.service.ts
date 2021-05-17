import { Injectable } from '@angular/core';
import { Home } from '../home/home';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(public http: HttpClient) { }
  //customer:Home;
  baseUrl = "http://localhost:8080/api/v1/customer/create";

  createCust(employee: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, employee);
  }
}
