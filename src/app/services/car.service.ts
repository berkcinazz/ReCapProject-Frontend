import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44376/api/cars";
  constructor(private http:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.http.get<CarResponseModel>(this.apiUrl+'/getallcarsdetail')
  }
}
