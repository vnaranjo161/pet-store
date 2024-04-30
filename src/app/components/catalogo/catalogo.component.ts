import { Component, OnInit } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})



export class CatalogoComponent implements OnInit {

  public products: Product [] = [];

  constructor(
    private apiService: ApiService,
    private cartServicesService: CartServicesService
  ) { }

  ngOnInit(): void {
    this.apiService.getProducts()
    .subscribe(res => {
      this.products = Object.values(res); 
        });
}

  addToCart(product: any) { 
    this.cartServicesService.addToCart(product)
    console.log( this.cartServicesService.getCart() )
  }

  
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
  cantidad: number;
  inventory: number;
  image: string; 
}

