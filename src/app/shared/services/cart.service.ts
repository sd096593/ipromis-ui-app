import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
    console.log('Added to cart:', product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}

