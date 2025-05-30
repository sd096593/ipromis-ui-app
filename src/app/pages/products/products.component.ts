import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 19999,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Laptop',
      price: 49999,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 2999,
      image: 'https://via.placeholder.com/150'
    }
  ];

  // ✅ Constructor goes inside the class
  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
