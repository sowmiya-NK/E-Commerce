import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private cartservices: CartService,
    private authServices: AuthserviceService,
    private router: Router
  ) {}
  logout() {
    this.authServices.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.authServices.isLoggedIn();
  }

  getCount() {
    let cartCount: number = this.cartservices.getCartCount();
    return cartCount;
  }
}
