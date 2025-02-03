import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-searcher-form',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './searcher-form.component.html',
  styleUrl: './searcher-form.component.css'
})
export class SearcherFormComponent {

  dialog = inject(MatDialog);

  

  searchForm: FormGroup;
  // valueSearch = 'Clear me';
  valueSearch = new FormControl(''); // Input control
  // searchValue = signal(''); // Para actualizar la vista reactiva

  productsFiltered: Product[] = []

  

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.valueSearch.valueChanges.subscribe(value => {
      // this.searchValue.set(value || '');
    });

    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.minLength(4)]  // Aquí puedes agregar más validaciones si es necesario
    });
  }

  filterProducts(value: string){
    this.productsFiltered = this.productService.getProductsService().filter(
      item => 
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.category?.toLowerCase().includes(value.toLowerCase())
    );
  }

  onSearch() {
    if (this.searchForm.valid) {
      const searchValue = this.searchForm.value.searchTerm;
      // console.log('Buscando por:', searchValue);
      this.filterProducts(searchValue)

      this.dialog.open(ModalComponent, {
        data: {
          products: this.productsFiltered
        },
      });
      // Aquí puedes llamar a tu servicio o realizar lo que necesites con el valor de búsqueda
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      data: {
        products: this.productsFiltered
      },
    });
  }

  clearInput(){
    this.valueSearch.setValue('')
  }

  
}
