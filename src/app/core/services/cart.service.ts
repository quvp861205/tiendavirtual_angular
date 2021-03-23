import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IProduct} from './../../product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: IProduct[] = [];
  private cart = new BehaviorSubject<IProduct[]>([]);

  cart$ = this.cart.asObservable();

  addCart(product: IProduct) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  constructor() { }
}
