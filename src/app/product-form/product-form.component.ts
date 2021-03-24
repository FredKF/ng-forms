import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product = {
    name:'',
    price: 0
  }
  constructor() { }

  onSubmit(): void{
    console.log(this.product);
  }
}
