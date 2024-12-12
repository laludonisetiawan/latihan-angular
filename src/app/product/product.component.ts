import { Component } from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  private productService: any;
  productName : string = '';

  constructor() {
    const service = new ProductService();
    this.productService = service;
    this.productName = this.productService.productName;
  }
}
