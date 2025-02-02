import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Beats Hoodie',
      gender: 'Men',
      urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-detail-3by4/products/BDG/2023/BDG23001_1J_1/Beats-Hoodie.jpg',
      description: 'Many speak, few rhyme, only the best improvise!',
      state: false,
      price: 89.99
    },
    {
      id: 2,
      title: 'Classic T-Shirt',
      gender: 'Men',
      urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24007_1A_1/MC-Tank-Top.jpg',
      description: 'A timeless piece for your casual look.',
      state: true,
      price: 29.99
    },
    {
      id: 3,
      title: 'Camo Jacket',
      gender: 'Men',
      urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24001_3A_1/MC-Hoodie.jpg',
      description: 'Blend in or stand out, the choice is yours.',
      state: true,
      price: 119.99
    },
    // {
    //   id: 4,
    //   title: 'Floral Dress',
    //   gender: 'Women',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24005_1A_1/MC-Jersey.jpg',
    //   description: 'Perfect for a sunny day out with a fresh floral print.',
    //   state: true,
    //   price: 79.99
    // },
    // {
    //   id: 5,
    //   title: 'Skinny Jeans',
    //   gender: 'Women',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24006_13_1/MC-College-Jacket.jpg',
    //   description: 'Essential piece for a chic, everyday look.',
    //   state: true,
    //   price: 49.99
    // },
    // {
    //   id: 6,
    //   title: 'Leather Biker Jacket',
    //   gender: 'Men',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24003_3A_1/MC-T-Shirt.jpg',
    //   description: 'An iconic jacket that makes a statement.',
    //   state: true,
    //   price: 139.99
    // },
    // {
    //   id: 7,
    //   title: 'High Waist Skirt',
    //   gender: 'Women',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24004_13_1/Rap-T-Shirt.jpg',
    //   description: 'Classic cut with a modern twist for every occasion.',
    //   state: true,
    //   price: 54.99
    // },
    // {
    //   id: 8,
    //   title: 'Track Pants',
    //   gender: 'Men',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24011_4E_1/Rap-Jersey.jpg',
    //   description: 'Comfy and stylish, perfect for an active lifestyle.',
    //   state: true,
    //   price: 39.99
    // },
    // {
    //   id: 9,
    //   title: 'Turtle Neck Sweater',
    //   gender: 'Women',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24012_3E_1/Wave-Jersey.jpg',
    //   description: 'Soft, cozy, and ideal for colder weather.',
    //   state: true,
    //   price: 59.99
    // },
    // {
    //   id: 10,
    //   title: 'Denim Shorts',
    //   gender: 'Women',
    //   urlImg: 'https://assets.redbullshop.com/images/f_auto,q_auto/t_product-list-3by4/products/BDG/2024/BDG24010_3F_1/MC-Bucket-Hat.jpg',
    //   description: 'A must-have in every wardrobe for warm weather.',
    //   state: true,
    //   price: 34.99
    // }
  ]
  productsCar: Product[] = []
  

  constructor() { }

  // Método para agregar productos
  addProductService(product: Product) {
    this.products.push(product);
  }

  addProductCarService(product: Product) {
    this.productsCar.push(product);
  }

  // Método para obtener la lista de productos
  getProductsService():Product[] {
    return this.products;
  }

  // Método para limpiar la lista de productos
  clearProductsService() {
    this.products = [];
  }

  getProductByIdService(id: number): Product | undefined{
    return this.products.find((product) => product.id === id)
  }

}
