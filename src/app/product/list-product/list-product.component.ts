import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product.service';

export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
];

@Component({
  selector: 'app-list-product',
  standalone: false,

  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})

// implementasi onInit agar ketika component setelah di load akan memanggil data dari api
export class ListProductComponent implements OnInit{
  // constructor untuk memanggil product service
  constructor(private _productService: ProductService){}
  // products: Product[]= []

  displayedColumns: string[] = ['id', 'name'];
  dataSource : Product[] = [];

  ngOnInit(): void {
  this._productService.getProduct().subscribe(res =>{
  //  this.products = res;
    this.dataSource = res;
  })
  }

}
