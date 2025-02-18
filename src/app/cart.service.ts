import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart( product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingTypes() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

}
