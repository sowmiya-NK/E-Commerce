import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart: Product[] = [];
  constructor(private http: HttpClient) {} //instance of httpclientModule injection httpmodule

  //fetching product
  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
