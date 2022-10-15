import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/Product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  addToCart(product: Product) {
    product.quantity = 1;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
  
   // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
//console.log(routeParams)
    // Find the product that correspond with the id provided in route.
//    this.product = products.find(
 //     (product) => product.id === productIdFromRoute
      this.productService.getProduct(productIdFromRoute)
      .subscribe(product => this.product = product);
    
    
  }
}

