import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
baseurl = "http://localhost:8080/api/v1/customer";
deleteUrl = "http://localhost:8080/api/v1/customer/delete";
  constructor(public http: HttpClient) { }
  getAllcust() : Observable<any>{
    console.log("service");
    console.log(this.http.get(`${this.baseurl}`));
    return this.http.get(`${this.baseurl}`);
  }
  deletecustomer(id : number) : Observable<any>{
    return this.http.delete(`${this.deleteUrl}/${id}`, { responseType: 'text' })
  }
}
