import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Product {
  id?: number;
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

  // function untuk post data dari Form ke api server
  createProduct(data: Product){
    return this._httpClient.post<Product>('http://localhost:3000/product', data);
  }

}
