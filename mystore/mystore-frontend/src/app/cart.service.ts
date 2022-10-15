import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  private cartTotal = new BehaviorSubject(0);
  currentCartTotal = this.cartTotal.asObservable();

  private cartTotalItems = new BehaviorSubject(0);
  currentCartTotalItems = this.cartTotalItems.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.updateCartTotal(this.countTotal(this.items));
   // this.updateCartTotalItems(this.countTotalItems(this.items));
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  countTotal(items: Product[]): number {
    let total: number = 0;
    let totalItems: number = 0;

    for (let index = 0; index < items.length; index++) {
      total = total + items[index]['price'] * items[index]['quantity'];
      totalItems = totalItems +  items[index]['quantity'];

    }
    this.cartTotal.next(total);
    this.cartTotalItems.next(totalItems);
    return total;
  }

  updateCartTotal(total: number) {
    this.cartTotal.next(total);
  }

  constructor() {}
}
