import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectionStrategy,  inject} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from '../product-card/product-card.component';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, MatButtonModule, NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Output() addCarProducts = new EventEmitter<string>()

  listProductsService: Product[] = []

  constructor(private productService: ProductService) {}

  loadProducts() {
    this.listProductsService = this.productService.getProductsService();
    
    // console.log('\nRespuesta del servicio')
    
    // for(let product of this.listProductsService){
    //   console.log(product)
      
    // }
  }
  getProductById(id:number): Product | undefined{
    return this.productService.getProductByIdService(id)
  }

  ngOnInit(){
    this.loadProducts()
    // console.log(this.listProductsService)
    // console.log(this.getProductById(5))
    
    
  }

  addProductCar(product:Product){
    this.productService.addProductCarService(product)
    // console.log(this.productService.productsCar.length);
    
  }

  // products = [
  //   {
  //     id: 1,
  //     title: 'Beats Hoodie',
  //     gender: 'Men',
  //     urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-detail-3by4/products/BDG/2023/BDG23001_1J_1/Beats-Hoodie.jpg',
  //     description: 'Many speak, few rhyme, only the best improvise!',
  //     state: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Classic T-Shirt',
  //     gender: 'Men',
  //     urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24007_1A_1/MC-Tank-Top.jpg',
  //     description: 'A timeless piece for your casual look.',
  //     state: true
  //   },
  //   {
  //     id: 3,
  //     title: 'Camo Jacket',
  //     gender: 'Men',
  //     urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24001_3A_1/MC-Hoodie.jpg',
  //     description: 'Blend in or stand out, the choice is yours.',
  //     state: true
  //   },
  //   // {
  //   //   id: 4,
  //   //   title: 'Floral Dress',
  //   //   gender: 'Women',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24005_1A_1/MC-Jersey.jpg',
  //   //   description: 'Perfect for a sunny day out with a fresh floral print.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 5,
  //   //   title: 'Skinny Jeans',
  //   //   gender: 'Women',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24006_13_1/MC-College-Jacket.jpg',
  //   //   description: 'Essential piece for a chic, everyday look.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 6,
  //   //   title: 'Leather Biker Jacket',
  //   //   gender: 'Men',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24003_3A_1/MC-T-Shirt.jpg',
  //   //   description: 'An iconic jacket that makes a statement.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 7,
  //   //   title: 'High Waist Skirt',
  //   //   gender: 'Women',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24004_13_1/Rap-T-Shirt.jpg',
  //   //   description: 'Classic cut with a modern twist for every occasion.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 8,
  //   //   title: 'Track Pants',
  //   //   gender: 'Men',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24011_4E_1/Rap-Jersey.jpg',
  //   //   description: 'Comfy and stylish, perfect for an active lifestyle.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 9,
  //   //   title: 'Turtle Neck Sweater',
  //   //   gender: 'Women',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24012_3E_1/Wave-Jersey.jpg',
  //   //   description: 'Soft, cozy, and ideal for colder weather.',
  //   //   state: true
  //   // },
  //   // {
  //   //   id: 10,
  //   //   title: 'Denim Shorts',
  //   //   gender: 'Women',
  //   //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24010_3F_1/MC-Bucket-Hat.jpg',
  //   //   description: 'A must-have in every wardrobe for warm weather.',
  //   //   state: true
  //   // }
  // ]
  productSelec: Product | undefined
  

  seleccionar(product: Product)
  {
    this.productSelec = product
  }

}
