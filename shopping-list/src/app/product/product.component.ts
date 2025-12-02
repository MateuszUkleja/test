import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { AppState } from '../app.state';
import { addProductAction } from '../reducers/product.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: false
})
export class ProductComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(state => state.product);
  }

  addProduct(name: string, price: string) {
    this.store.dispatch(addProductAction({
      payload: {
        name: name,
        price: Number(price)
      }
    }));
  }
}