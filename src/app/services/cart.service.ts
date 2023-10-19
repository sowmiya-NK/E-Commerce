import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  constructor() {}

  //set cart to local stoarge
  loadCart() {
    if (!localStorage.getItem('carts'))
      localStorage.setItem('carts', JSON.stringify(this.cart));
  }

  //addtocart
  addToCart(id: number) {
    console.log("called");
    
    let cart: Product[] = JSON.parse(localStorage.getItem('carts') as string);
    console.log(cart);
    
    let products = JSON.parse(localStorage.getItem('products') as string);
    console.log(cart);

    let findproduct: Product | undefined = products.find(
      (p: { id: number }) => p.id === id
    );
    if (findproduct) {
      let cartProduct: Product | undefined = cart.find(
        (c) => c.id === findproduct?.id
      );

      if (cartProduct) {
        let newCart: Product[] = [];
        for (let product of cart) {
          if (product.id === id) {
            newCart.push({ ...product, quanity: product.quanity! + 1 });
          } else {
            newCart.push(product);
          }
          cart = newCart;
        }
      } else {
        cart.push({ ...findproduct, quanity: 1 });
      }
    }

    localStorage.setItem('carts', JSON.stringify(cart));
  }

  //cart count in navbar
  getCartCount() {
    let count: number = 0;
    let cart = JSON.parse(localStorage.getItem('carts') as string);

    for (let c of cart) {
      count += c.quanity;
    }
    return count;
  }

  //getting cart details show in cart page

    getCartDetails(): Product[] {
    return this.cart;
  }
}
