import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productform: FormGroup;
  submitted: Boolean = false;
  userService: any;
  usersService: any;

  constructor(private formBuilder: FormBuilder, private productService: ProductServiceService, private router: Router) { }
  get f() { return this.productform.controls; }

  ngOnInit() {
    this.productform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(500)]]
    })
  }

  async onSubmit() {
    try {
      this.submitted = true;
      if (this.productform.invalid) return
      await this.productService.insertProducts(this.productform.value)
      alert("products successfully inserted")
      this.navigateToProducts()
    } catch (err) {
      console.log(err)
      alert(err)
    }
  }

  navigateToProducts() {
    this.router.navigate(['products'])
  }


  // ngOnInit() {
  //   this.productform = this.formBuilder.group({
  //     username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  //     email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
  //     mobile: ['', [Validators.required, Validators.min(10), Validators.max(10)]],
  //     designation: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  //     firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
  //     lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
  //   })
  // }

  // async onSubmit() {
  //   try {
  //     this.submitted = true;
  //     if (this.productform.invalid) return
  //     await this.usersService.insertProducts(this.productform.value)
  //     alert("products successfully inserted")
  //     this.navigateToUsers()
  //   } catch (err) {
  //     console.log(err)
  //     alert(err)
  //   }
  // }

  // navigateToUsers() {
  //   this.router.navigate(['users'])
  // }



  // category: [
  //   this.category[0],
  //   [
  //     Validators.required
  //   ]
  // ],
  // subCategory: [
  //   this.subCategory.clothes[0], Validators.required
  // ],


  // getSelectedCategory() {
  //   switch (this.submitForm.controls['category'].value) {
  //     case 'Clothes': return 'clothes'
  //     case 'Watch': return 'watch'
  //     case 'Accessories': return 'accessories'
  //   }

  // }

  // category: Array<string> = [
  //   "Clothes",
  //   "Watch",
  //   "Accessories"
  // ]
  // subCategory = {
  //   clothes: [
  //     "Formal",
  //     "Casual",
  //     "Smart Casual"
  //   ],
  //   watch: [
  //     "Analog",
  //     "Digital",
  //     "FitBit"
  //   ],
  //   accessories: [
  //     "Speakers",
  //     "Headphones"
  //   ]
  // }

}


