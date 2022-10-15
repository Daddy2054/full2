import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../cart.service';
//import { AuthService } from '@auth0/auth0-angular';
//import { DOCUMENT } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  items = this.cartService.getItems();
  total: number = 0;
  totalItems: number = 0;

  constructor(
    public cartService: CartService,
   // @Inject(DOCUMENT) public document: Document,
   // public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.currentCartTotal.subscribe((msg) => (this.total = msg));
    this.cartService.currentCartTotalItems.subscribe(
      (msg) => (this.totalItems = msg)
    );
  }
}
