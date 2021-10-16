import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44376/api/customers";
  constructor(private http:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.http.get<CustomerResponseModel>(this.apiUrl+'/getall');
  }
}
