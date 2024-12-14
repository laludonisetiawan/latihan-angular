import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {Product, ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-product',
  standalone: false,

  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})

export class FormProductComponent implements OnInit {

  form: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private _productService: ProductService,
    private router: Router
  ) {}


  ngOnInit(): void {
  this.form = this.formBuilder.group({
    name: ''
  })
  }

  // membuat fungsi submit
  submitForm(f: FormGroupDirective) {
    const data: Product = {
      name: f.value.name
    }
    this._productService.createProduct(data).subscribe((res) => {
      this.router.navigate(['/product'])
    });
  }


}
