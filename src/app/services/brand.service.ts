import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl="https://localhost:44376/api/brands";
  constructor(private http:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.http.get<BrandResponseModel>(this.apiUrl+'/getall')
  }
}
