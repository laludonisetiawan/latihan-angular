import { Component } from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  productName : string = '';
  // Dependency Injection untuk interaksi dengan ProductService yang berisi data productName
  constructor(private readonly productService: ProductService) {
    this.productName = this.productService.productName;
  }
}
