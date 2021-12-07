import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  //Inject the HttpClient object to the constructor
  constructor() { }

  // getTabDetail(val):Observable<Product[]> {
  //   // make a GET call to "http://localhost:3000/products"
  //   return 
  // }
}
