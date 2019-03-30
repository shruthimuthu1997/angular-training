import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  submitForm: FormGroup;
  submitted: Boolean = false;

  category: Array<string> = [
    "Clothes",
    "Watch",
    "Accessories"
  ]
  subCategory = {
    clothes: [
      "Formal",
      "Casual",
      "Smart Casual"
    ],
    watch: [
      "Analog",
      "Digital",
      "FitBit"
    ],
    accessories: [
      "Speakers",
      "Headphones"
    ]
  }
  constructor(private formBuilder: FormBuilder) { }
  get f() { return this.submitForm.controls; }

  ngOnInit() {
    this.submitForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      price: ['', [Validators.required, Validators.minLength(500), Validators.maxLength(10000)]],
      code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],

      category: [
        this.category[0],
        [
          Validators.required
        ]
      ],
      subCategory: [
        this.subCategory.clothes[0], Validators.required
      ],
    });
  }

  getSelectedCategory() {
    switch (this.submitForm.controls['category'].value) {
      case 'Clothes': return 'clothes'
      case 'Watch': return 'watch'
      case 'Accessories': return 'accessories'
    }

  }

}


