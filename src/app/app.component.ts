import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { AuthserviceService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private cartservices: CartService,
    private authServices: AuthserviceService
  ) {}
  ngOnInit(): void {
    this.cartservices.loadCart();
  }
  
  isLoggedIn(): boolean {
    return this.authServices.isLoggedIn();
  }
}
