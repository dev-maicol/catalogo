import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

export const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'products', redirectTo: ''
  },
  {
    path: 'product/:id', component: ProductCardComponent
  },
];
