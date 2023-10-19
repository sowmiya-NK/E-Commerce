import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { OnInit } from '@angular/core';
import { JsonpInterceptor } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productservices: ProductService,private storageservices:StorageService,private cartservices:CartService) {}
  //lifecycle of that page
  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct() {
    this.productservices.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.storageservices.setLocalProducts(this.products)
      //add to localstorage
      
    });
  }

  addToCart(id:number){
    this.cartservices.addToCart(id)
  }
}
