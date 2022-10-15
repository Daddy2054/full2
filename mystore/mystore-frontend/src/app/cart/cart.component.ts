import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  total: number = 0;
  @Input() item: Product;

  constructor(private cartService: CartService) {
    this.item = {
      name: '',
      price: 1,
      quantity: 1,
      id: 0,
      description: '',
      url: '',
      category: "",
    };
  }

  ngOnInit(): void {
    this.cartService.currentCartTotal.subscribe((msg) => (this.total = msg));
    this.cartService.updateCartTotal(this.cartService.countTotal(this.items));
  }

  plusOne(item: Product): void {
    item.quantity <= 9 ? (item.quantity += 1) : item.quantity;
    this.cartService.countTotal(this.items);
  }
  minusOne(item: Product): void {
    item.quantity >= 1 ? (item.quantity -= 1) : item.quantity;
    this.cartService.countTotal(this.items);
  }
/*
  remove(item: Product): void {
    this.items = this.items.filter((p) => p.id !== item.id);
    this.cartService.countTotal(this.items);
  }
*/
  remove2(item: Product): void {
    this.items = this.items.filter((p) => p.id !== item.id);
    this.cartService.countTotal(this.items);
  }

}
