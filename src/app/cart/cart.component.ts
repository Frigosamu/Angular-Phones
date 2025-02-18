import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false
})
export class CartComponent implements OnInit {
  shippingOptions: { type: string, price: number }[] = [];
  items = this.cartService.getItems();
  itemsTotal = this.cartService.getTotal();
  selectedShippingCost = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.cartService.getShippingTypes().subscribe(data => {
      this.shippingOptions = data;
    });
  }

  subtotal() {
    this.itemsTotal = this.cartService.getTotal() + Number(this.selectedShippingCost);
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.itemsTotal = this.cartService.getTotal();
    console.warn('Pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}