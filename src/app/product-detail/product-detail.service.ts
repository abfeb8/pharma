import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  //Inject the HttpClient object to the constructor
  constructor(private http: HttpClient) { }

  getTabDetail(val: any): Observable<Product[]> {
    // make a GET call to "http://localhost:3000/products"
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
}
