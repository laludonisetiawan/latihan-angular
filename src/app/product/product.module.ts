import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {RouterModule,Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule
  ]
})
export class ProductModule { }
