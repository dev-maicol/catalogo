import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NgFor } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';

import { SearcherFormComponent } from './searcher-form/searcher-form.component';


import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, MatIconModule, SearcherFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogo';
  totalProductCar = 0

  constructor(private productService: ProductService) {}

  carProducts = 0
  ngOnInit(){
    this.carProducts = this.productService.productsCar.length
  }
  getProductAdd(){
    this.carProducts++
  }
  getProductsCar(): number{
    this.totalProductCar = this.productService.productsCar.length
    return this.totalProductCar
  }
}
