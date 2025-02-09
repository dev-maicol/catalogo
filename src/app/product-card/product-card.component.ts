import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';


import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatIconModule ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

// export class ButtonOverviewExample {}

export class ProductCardComponent {
  // @Input() productSelec: Product | undefined
  product: Product | undefined

  constructor(private router: Router, private activeroute: ActivatedRoute, private productService: ProductService ){
    const id = Number(this.activeroute.snapshot.paramMap.get('id'))
    this.productService.getProductByIdService(id)
    .subscribe( product => this.product = product)
  }

  regresar(){
    this.router.navigate(['/products'])
  }


}
