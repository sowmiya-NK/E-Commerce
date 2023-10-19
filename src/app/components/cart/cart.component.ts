import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Product[] = JSON.parse(localStorage.getItem('carts') as string);
  cartDetails: Product[] = [];
  constructor(private cartservices: CartService) {}

  ngOnInit(): void {
    this.cartDetails = this.cartservices.getCartDetails();
    
  }
}
