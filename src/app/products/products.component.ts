import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  tableHeaders = ["s.no", "name", "price", "manufacture", "owner"]

  constructor(private router: Router, private productService: ProductServiceService) { }

  async ngOnInit() {

    const products = await this.productService.getProducts()
    this.products = products['product']
    console.log("hello");
  }


  navigateToShop() {

    this.router.navigate(["products/shop"]) // this products/add should be same as path in module.ts
  }

}
