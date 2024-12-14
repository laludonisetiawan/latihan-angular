import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // inject http client
  constructor(private _httpClient: HttpClient) { }

  productName = "Laptop Asus";

  // function untuk get data dari api
  getProduct(){
    return this._httpClient.get<Product[]>('http://localhost:3000/product');
  }

}
