import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {RouterModule,Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ListProductComponent } from './list-product/list-product.component';
import {MatTableModule} from '@angular/material/table';
import { NewProductComponent } from './new-product/new-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';



const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ListProductComponent
      },
      {
        path: 'new',
        component: NewProductComponent
      }

    ]
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    NewProductComponent,
    FormProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ProductModule { }
