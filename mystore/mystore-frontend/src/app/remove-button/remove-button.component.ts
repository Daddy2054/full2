import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css'],
})
export class RemoveButtonComponent implements OnInit {
  items = this.cartService.getItems();
  @Input() item: Product;
  @Output() removeItemEvent = new EventEmitter<Product>();

  removeCartItem(item: Product): void {
    this.removeItemEvent.emit(this.item);
  }
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

  ngOnInit(): void {}
}
