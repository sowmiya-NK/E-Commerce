import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  cart: Product[] = [];
  users: User[] = [
    { id: 1, email: 'sowmiya123@gmail.com', password: 'sowmiya123' },
  ];
  constructor() {}

  setLocalProducts(products: Product[]) {
    if (!localStorage.getItem('products'))
      localStorage.setItem('products', JSON.stringify(products));
  }

  setLocalCarts() {
    if (!localStorage.getItem('cart'))
      localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loaduser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  loadproducts(products: Product[]) {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setAllUsers(registerForm: User) {
    this.users.push({
      id: this.users.length + 1,
      email: registerForm.email,
      password: registerForm.password,
    });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  //userset
  setLoggesInUser(user: User): void {
    localStorage.setItem('LoggedInUser', JSON.stringify(user));
  }

  //remove user when logout is clicked
  removeLoggedInUser(): void {
    localStorage.removeItem('LoggedInUser');
  }

  isLoggedInUser(): boolean {
    return localStorage.getItem('LoggedInUser')!==null;
  }
}
2