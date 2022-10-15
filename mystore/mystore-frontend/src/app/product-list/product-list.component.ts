import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  getProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      //console.log(this.products);
      //console.log(this.products.length);
      if (this.products.length === 0) {
        this.productService.createDb();
      }
    });
  }

  addToCart(product: Product) {
    product.quantity = 1;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();

  //  console.log(this.products);
    /*     if (this.products.length === 0) {
      this.productService.createDb();
      console.log(this.products.length )
//      this.getProducts();
    }
    */
  }
}
