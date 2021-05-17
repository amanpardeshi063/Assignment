import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCustomerService {

baseUrl="http://localhost:8080/api/v1/customer/update";
  constructor(private http: HttpClient) { }
  updateCust(id:any,home:any): Observable<Object>{
console.log(this.http.put(`${this.baseUrl}/${id}`, home,{responseType: 'text'}));
    return  this.http.put(`${this.baseUrl}/${id}`, home,{responseType: 'text'});

  }

}
