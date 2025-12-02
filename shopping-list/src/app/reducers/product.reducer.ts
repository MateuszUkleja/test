import { createReducer, on, createAction, props, Action } from '@ngrx/store';
import { Product } from '../product/product.model';

export const addProductAction = createAction(
  '[Product] Add',
  props<{ payload: Product }>()
);

export const initialState: Product[] = [];

const _productReducer = createReducer(
  initialState,
  on(addProductAction, (state, { payload }) => [...state, payload])
);

export function productReducer(state: Product[] | undefined, action: Action) {
  return _productReducer(state, action);
}